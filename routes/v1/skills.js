const express = require('express')
const router = express.Router()

const db = require('../../lib/database')

module.exports = router

router.get('/top3', (req, res) => {
  db.getTop3()
    .then((data) => {
      res.json({data: data})
    })
    .catch(() => res.status(500).json({error: "Sorry, something went wrong!"}))
})

router.get('/random', (req, res) => {
  db.random()
    .then((data) => {
      res.json({data: data})
    })
    .catch((err) => {
      res.status(500).json({error: "Sorry, something went wrong!"})
    })
})

router.get('/', (req, res) => {
  db.getSkills()
    .then((data) => {
      res.json({data: data})
    })
    .catch(() => res.status(500).json({error: "Sorry, something went wrong!"}))
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getSkillsById(id)
    .then((data) => {
      res.json({data: data})
    })
    .catch(() => res.status(500).json({error: "Sorry, this skill does not exist...yet!"}))
})

router.put('/:id/upvote/:video_id', (req, res) => {
  const id = req.params.id
  const video_id = req.params.video_id
  const user_id = req.body.user_id

  db.upVote (id, video_id, user_id)
    .then((data) => {
      res.json({data: data})
    })
    .catch(() => res.status(500).json({error: "Sorry, something went wrong!"}))
})

router.put('/:id/downvote/:video_id', (req, res) => {
  const id = req.params.id
  const video_id = req.params.video_id
  const user_id = req.body.user_id

  db.downVote (id, video_id, user_id)
    .then((data) => {
      res.json({data: data})
    })
    .catch(() => res.status(500).json({error: "Sorry, something went wrong!"}))
})
