const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const PORT = process.env.PORT || 3000

//Remove when done with mock login route
const db = require('./lib/database')


const app = express()

const skills = require('./routes/v1/skills')
const users = require('./routes/v1/users')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(cors())

app.use('/v1/skills', skills)
app.use('/v1/users', users)

//Remove when done with mock login route
app.use('/login', (req, res) => {
  console.log(req.body.username, req.body.password)
    let id = 199
    db.getUserDetails(id)
      .then((data) => {
        res.json({data: data})
      })
      .catch(() => res.sendStatus(500))
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
