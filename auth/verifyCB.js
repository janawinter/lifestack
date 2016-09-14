const jwt = require('jsonwebtoken')
const passport = require('passport')
const db = require('../lib/database')
const url = process.env.NODE_ENV || 'http://localhost:3000'


const twitterConfig = {
  consumerKey: 'D5X2oGz0DTpwy9aFQA4aGpCpj',
  consumerSecret: 'B9PXuiPOHOfLMm6bkLEtX8uGVyuCnV8nAv7EKqaeRoJ7Ll56WO',
  callbackURL: `${url}/login/twitter/callback`
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
    // res.redirect('/')
    console.log(token)
    res.redirect('http://localhost:5000' + '/#/profile/' + user[0].id)
  })(req, res, next)
}


function verify (token, tokenSecret, profile, done) {
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
}


module.exports = {
  getTokenFromCookie: getTokenFromCookie,
  handleError: handleError,
  issueJwt: issueJwt,
  twitterConfig: twitterConfig,
  verify: verify
}
