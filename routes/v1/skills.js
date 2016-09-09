const express = require('express')
const Router = express.Router()

module.exports = Router

Router.get('/', (req, res) => {
  res.send([
    {
      id: 1237,
      link: "https://www.youtube.com/watch?v=jpIX1_qQni8",
      skillName: "Change Lightbulb"
    },
    {
      id: 1238,
      link: "https://www.youtube.com/watch?v=KBtkup2PWAU",
      skillName: "How to Write a cheque"
    },
    {
      id: 1239,
      link: "https://www.youtube.com/watch?v=aaqzPMOd_1g",
      skillName: "How to Grow Herbs"
    },
  ])
})
