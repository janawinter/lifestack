const express = require('express')
const router = express.Router()

const db = require('../../lib/database')

module.exports = router

router.get('/top3', (req, res) => {
  db.getTop3()
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

router.get('/', (req, res) => {
  db.getSkills()
    .then((data) => {
      res.json({data: data})
    })
    .catch(() => res.sendStatus(500))
})

router.put('/:id/vote', (req, res) => {
  const id = req.params.id
  const vote = req.body.vote

  if (vote > 0) {
    db.upVote (id)
      .then((data) => {
        res.sendStatus(202)
      })
      .catch(() => res.sendStatus(500))
  } else {
    db.downVote (id)
    .then((data) => {
      res.sendStatus(202)
    })
    .catch(() => res.sendStatus(500))
  }
})
