const express = require('express')
const router = express.Router()
const expressSession = require('express-session')
const passport = require('passport')
const verifyJwt = require('express-jwt')
const verifyCB = require('../../auth/verifyCB')

const db = require('../../lib/database')

const session = expressSession({
  resave: false,
  secret: process.env.SESSIONS,
  saveUninitialized: false
})

function getSecret (req, payload, done) {
  done(null, req.app.get('JWT_SECRET'))
}

module.exports = router

router.get('/top3', (req, res) => {
  db.getTop3()
    .then((data) => {
      res.json({data: data})
    })
    .catch(() => res.sendStatus(500))
})

router.get('/random', (req, res) => {
  db.random()
    .then((data) => {
      res.json({data: data})
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    })
})

router.get('/', (req, res) => {
  db.getSkills()
    .then((data) => {
      res.json({data: data})
    })
    .catch(() => res.sendStatus(500))
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getSkillsById(id)
    .then((data) => {
      res.json({data: data})
    })
    .catch(() => res.sendStatus(500))
})

router.put('/:id/upvote/:video_id',
  verifyJwt({
    getToken: verifyCB.getTokenFromCookie,
    secret: getSecret
  }),
  (req, res) => {
    const id = req.params.id
    const video_id = req.params.video_id
    const user_id = req.body.user_id

    db.upVote (id, video_id, user_id)
      .then((data) => {
        res.json({data: data})
      })
      .catch(() => res.sendStatus(500))
})

router.put('/:id/downvote/:video_id',
  verifyJwt({
    getToken: verifyCB.getTokenFromCookie,
    secret: getSecret
  }),
  (req, res) => {
    const id = req.params.id
    const video_id = req.params.video_id
    const user_id = req.body.user_id

    db.downVote (id, video_id, user_id)
      .then((data) => {
        res.json({data: data})
      })
      .catch(() => res.sendStatus(500))
})
