const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const session = require('express-session')
const PORT = process.env.PORT || 3000

const db = require('./lib/database')

var passport = require('passport')
var TwitterStrategy = require('passport-twitter').Strategy
var configAuth = require('./auth/twitterConfig')
var verifyCB = require('./auth/verifyCB')


const app = express()

const skills = require('./routes/v1/skills')
const users = require('./routes/v1/users')
const videos = require('./routes/v1/videos')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(cors())
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }))

app.use('/v1/skills', skills)
app.use('/v1/users', users)
app.use('/v1/videos', videos)

passport.serializeUser(function(user, done) {
  done(null, user)
})

passport.deserializeUser(function(obj, done) {
  db.getUserById(obj[0].twitter_id)
    .then((user) => {
      done(null, user[0])
    })
    .catch((err) => {
      done(err, null)
    })
})

app.use(passport.initialize())
app.use(passport.session())

passport.use(new TwitterStrategy({
    consumerKey: configAuth.apikey,
    consumerSecret: configAuth.apisecret,
    callbackURL: configAuth.callbackUrl
  }, verifyCB))

app.get('/auth/twitter', passport.authenticate('twitter'))

app.get('/login/twitter/callback',
  passport.authenticate('twitter', { failureRedirect: 'http://localhost:5000' }),
  function(req, res) {
    res.redirect('http://localhost:5000' + '/#/profile/' + req.user[0].id)
  })

  app.get('/logout', (req, res) => {
    console.log('logout')
    req.session.destroy()
    res.sendStatus(200)
  })

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
