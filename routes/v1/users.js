const express = require('express')
const router = express.Router()

const db = require('../../lib/database')

module.exports = router


router.get("/:id", (req, res) => {
  let id = req.params.id
  db.getUserById(id)
  .then((data) => {
      res.json({data: data})
    })
    .catch(() => res.sendStatus(500))
})
