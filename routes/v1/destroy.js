const express = require('express')
const router = express.Router()

const db = require('../../lib/database')

module.exports = router

router.delete('/:id/delete/:video_id', (req, res) => {
  const id = req.params.id
  const video_id = req.params.video_id
  db.deleteVideo (id, video_id)
    .then((data) => {
      res.json({data: data})
    })
    .catch(() => res.sendStatus(500))
})
