const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const expressSession = require('express-session')
const cookieParser = require('cookie-parser')
const PORT = process.env.PORT || 3000

const db = require('./lib/database')

var passport = require('passport')
var TwitterStrategy = require('passport-twitter').Strategy
var verifyCB = require('./auth/verifyCB')


const app = express()

const skills = require('./routes/v1/skills')
const users = require('./routes/v1/users')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(cors({
  origin: ['http://localhost:5000', 'http://adulting.herokuapp.com', 'http://www.hashtagadulting.co.nz', 'https://adulting-server.herokuapp.com/'],
  credentials: true
}))
app.use(cookieParser())
app.use(passport.initialize())
app.use(passport.session())
app.set('JWT_SECRET', 'Nikau 2016')

app.use('/v1/skills', skills)
app.use('/v1/users', users)

process.on('unhandledRejection', (error, promise) => {
  console.error('UNHANDLED REJECTION', error.stack)
})

passport.use(new TwitterStrategy(verifyCB.twitterConfig, verifyCB.verify))

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

const session = expressSession({
  resave: false,
  secret: 'CHANGE THIS IN PRODUCTION!',
  saveUninitialized: false
})

app.get('/auth/twitter', session, passport.authenticate('twitter'))

app.get('/login/twitter/callback', session, verifyCB.issueJwt,
function(req, res) {
  console.log("reached")
  res.redirect('http://localhost:5000' + '/#/profile/' + req.user[0].id)
})

app.get('/logout', (req, res) => {
  res.clearCookie('token', { path: '/' })
  res.json({ message: 'User logged out.' })
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
