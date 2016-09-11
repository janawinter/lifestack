const db = require('../lib/database')

module.exports = function (token, tokenSecret, profile, done) {
  process.nextTick(function() {
    db.getUserById(profile.id)
      .then((user) => {
        if (user[0]) {
          console.log("User exists")
          return done(null, user)
        } else {
          console.log("User does not exist")
          db.addUser(profile.id, profile.username, profile.photos[0].value)
            .then((user) => {
              console.log("User has been created")
              return done(null, user)
            })
            .catch((err) => {
              console.log("Error adding user in DB")
              return done(err, null)
            })
        }
      })
      .catch((err) => {
        console.log("Error finding user in DB")
        return done(err, null)
      })
  })
}
