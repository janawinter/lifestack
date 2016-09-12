# Code review: Nikau final project

## Documentation

Pretty solid docs! Really made it easy to approach the project from the perspective of a new developer. The lack of install instructions for the server made it slightly slower, but the steps were relatively intuitive.


## Client

### Configuration

```js
const env = process.env.NODE_ENV || 'development'
const url = env === 'production' ? 'placeholderURL'
                                    :'http://localhost:3000'
```

Careful... remember, this code is executed in the browser (even though it's hosted on the server). `process.env.NODE_ENV` will never exist. One way around this would be to have separate Webpack configs for production, and grab variables like this from that config.


### Header.jsx

```js
  getInitialState () {
    return {
      options: [],
      username: "",
      password: ""
    }
  },
```

Presume this is left over from before Twitter login. Do you need `getInitialState` for config at all? Feels like you could just pass whatever you need via the store and `mapStateToProps`... keeping the state in the component and not the store seems like it hides it a bit, which could make it less maintainable:

```js
    const dropdown = data.map(elem => elem.category)
                         .filter((elem, i, ar) => ar.indexOf(elem) === i)
                         .map(elem => makeCategory(elem))
```

The filter here has no effect. Note that:

```js
[1, 2, 3, 4, 5].filter((e, i, a) => a.indexOf(e) === i)
```

will always result in `[1, 2, 3, 4, 5]` since `i` is already the index.

The Header component as a whole could use some DRYing out but I'm sure you already know that ;)


### Home.jsx

Again, not too sure about the use of `getInitialState` here. Seems like this could easily be a functional/dumb component. (This applies to a number of the components that just return JSX.)


### Tab.jsx

```js
  render () {
    const videos = this.props.videos
      .filter(elem => {
        return elem.type === this.state.currentTab
      })
      .sort((a, b) => a.votes < b.votes)
```

Sort expects a function that returns -1, 0, or 1: result of comparing using a boolean will be implementation-defined. It'll often work, but isn't guaranteed to!


### Routing

It's... slightly disconcerting that everything's 'in' the Header! But it's one of those things that works for now, and gets refactored later :)

```js
        <Route component={HeaderContainer}>
          <Route path='/' component={Home} />
          <Route path='/search' component={SearchContainer} />
          <Route path='/profile/:id' component={ProfileContainer} />
        </Route>
```


#### Wombats

```js
//
//                                       888               888
//                                       888               888
//                                       888               888
//  888  888  888  .d88b.  88888b.d88b.  88888b.   8888b.  888888
//  888  888  888 d88""88b 888 "888 "88b 888 "88b     "88b 888
//  888  888  888 888  888 888  888  888 888  888 .d888888 888
//  Y88b 888 d88P Y88..88P 888  888  888 888 d88P 888  888 Y88b.
//    "Y8888888P"  "Y88P"  888  888  888 88888P"  "Y888888  "Y888
```

Agreed.


## Server

### verifyCB.js

```
(node:17181) Warning: a promise was created in a handler at /home/basie/eda/lifestack/auth/verifyCB.js:12:14 but was not returned from it, see http://goo.gl/rRqMUw
    at Function.Promise.attempt.Promise.try (/home/basie/eda/lifestack/node_modules/bluebird/js/release/method.js:29:9)
```

I think this is being caused by trying to return from this promise chain:

```js
    db.getUserById(profile.id)
      .then((user) => {
        if (user[0]) {
          console.log("User exists")
          return done(null, user)
        } else {
          console.log("User does not exist")

          // Remember that `then`, which we are inside, is a function
          db.addUser(profile.id, profile.username, profile.photos[0].value)
            .then((user) => {
              console.log("User has been created")

              // This return call only returns from inside this inner `then`
              return done(null, user)
            })
            .catch((err) => {
              console.log("Error adding user in DB")

              // Same here
              return done(err, null)
            })
        }
      })
      .catch((err) => {
        console.log("Error finding user in DB")
        return done(err, null)
      })
```

The code still mostly works because we're calling the callback... however, it's possible it could lead to unexpected behaviour in the future. Execution continues where you might not have imagined it would. Adding `return` in front of especially the second `db` call, and possibly also the first one, may help here.

Also, note that in both cases where you return `user` you're directly returning the result of the database call, which is an array not an object.


### twitterConfig.js

Hey, y'know that Twitter auth secret you committed to version control? I own it now!


### Migrations

Already commented on this in person, but just for completeness:

```js
exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.bigint('twitter_id')
    table.string('username')
    table.string('profile_pic')
  })
}
```

Twitter's ID comes from their API as a string, and it's guaranteed unique so no reason you can't just use a string and avoid all the limit issues with column types.


### knexfile.js

```js
  production: {
    client: 'postgresql',
    connection: {
      host: 'ec2-184-73-202-229.compute-1.amazonaws.com',
      port: '5432',
      database: 'dat16vcqpa25mp',
      user:     'eugprbskmqtovo',
      password: process.env.DBPWD
  },
```

Note that the connection can be a string instead of an object if that's easier (ie the connection string from Heroku's database info).


### Database

```js
  return knex('users')
    .insert({twitter_id: id, username: username, profile_pic: profile_pic})
    .then(data => {
      return knex ('users')
        .where('twitter_id', id)
    })
```

Needs error handling.

```js
function getUserDetails (id) {
  return knex ('users')
    .select()
    .where('id', id)
    .then(data => {
        return knex ('userSkills')
          .join('skills', 'skills.id', '=', 'skill_id')
          .where('user_id', id)
```

Note that this doesn't have to be two queries: joins are your friend! For example:

```js
knex('users')
  .join('userSkills', 'users.id', '=', 'userSkills.user_id')
  .join('skills', 'skills.id', '=', 'userSkills.skill_id')
  .where('users.id', id)
```

Something like that. Experiment with the exact combination till you get the data you want back.


### Routes: users

```js
router.put('/:id/showcase', (req, res) => {
  const id = req.params.id
  const showcase = req.body.showcase
  const skill_id = req.body.skill_id

  db.uploadShowcase(id, skill_id, showcase)
    .then((data) => {
    db.addShowcaseVideo(skill_id, showcase)
      .then((data) => {
        return db.getUserDetails(id)
    })
  })
  .catch(() => res.sendStatus(500))
})
```

Notice that this returns a promise, and doesn't send anything back in the response.

