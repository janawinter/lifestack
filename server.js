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

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(cors())
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }))

app.use('/v1/skills', skills)
app.use('/v1/users', users)

passport.serializeUser(function(user, done) {
  done(null, user)
})

passport.deserializeUser(function(id, done) {
  db.getUserById(id)
    .then((user) => {
      done(null, user)
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
  passport.authenticate('twitter', { successRedirect: 'http://localhost:5000',
                                     failureRedirect: 'http://localhost:5000/v1/users' }))

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
