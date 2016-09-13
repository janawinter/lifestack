const express = require('express')
const router = express.Router()

const db = require('../../lib/database')

module.exports = router

router.delete('/:id', (req, res) => {
  const id = req.params.id

  db.deleteVideo (id)
    .then((data) => {
      if(data === 0) {
        return res.sendStatus(404)
      }
      res.json({
        message: "This has been deleted"
      })
    })
    .catch(() => res.sendStatus(500))
})
