const express = require('express')
const router = express.Router()

const db = require('../../lib/database')

module.exports = router


router.get("/:id", (req, res) => {
  let id = req.params.id
  db.getUserDetails(id)
  .then((data) => {
      res.json({data: data})
    })
    .catch(() => res.sendStatus(500))
})

router.put('/:id/showcase', (req, res) => {
  const id = req.params.id
  const showcase = req.body.showcase
  const skill_id = req.body.skill_id


  db.uploadShowcase(id, skill_id, showcase)
    .then((data) => {
    db.addShowcaseVideo(skill_id, showcase)
      .then((data) => {
        res.sendStatus(201)
    })
  })
  .catch(() => res.sendStatus(500))
})
