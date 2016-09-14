const jwt = require('jsonwebtoken')
const passport = require('passport')
const db = require('../lib/database')
const url = process.env.URL || 'http://localhost:3000'
const client_url = process.env.CLIENT || 'http://localhost:5000'


const twitterConfig = {
  consumerKey: process.env.CONSUMER_KEY,
  consumerSecret: process.env.CONSUMER_SECRET,
  callbackURL: '/login/twitter/callback'
}

function createToken (user, secret) {
  return jwt.sign({
    id: user.id,
    username: user.username
  }, secret, {
    expiresIn: 60 * 60 * 24
  })
}

function getTokenFromCookie (req) {
  if (req.cookies.token) {
    return req.cookies.token
  }
  return null
}

function handleError (err, req, res, next) {
  if (err) {
    return res.status(403).json({
      message: 'Access to this resource was denied.',
      error: err.message
    })
  }
  next()
}


function issueJwt (req, res, next) {
  passport.authenticate('twitter', (err, user, info) => {
    if (err) {
      return res.status(500).json({
        message: 'Authentication failed due to a server error.',
        info: err.message
      })
    }

    if (!user) {
      return res.json({
        message: 'Authentication failed.',
        info: info.message
      })
    }

    const token = createToken(user, req.app.get('JWT_SECRET'))
    // Ideally use `secure: true` in production
    res.cookie('token', token, { httpOnly: true })
    res.redirect(`${client_url}/#/profile/${user[0].id}`)
  })(req, res, next)
}


function verify (token, tokenSecret, profile, done) {
    db.getUserById(profile.id)
      .then((user) => {
        if (user[0]) {
          return done(null, user)
        } else {
          db.addUser(profile.id, profile.username, profile.photos[0].value)
            .then((user) => {
              return done(null, user)
            })
            .catch((err) => {
              return done(err, null)
            })
        }
      })
      .catch((err) => {
        return done(err, null)
      })
}


module.exports = {
  getTokenFromCookie: getTokenFromCookie,
  handleError: handleError,
  issueJwt: issueJwt,
  twitterConfig: twitterConfig,
  verify: verify
}
