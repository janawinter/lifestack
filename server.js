const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const PORT = process.env.PORT || 3000

const app = express()

const skills = require('./routes/v1/skills')
const users = require('./routes/v1/users')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(cors())

app.use('/v1/skills', skills)
app.use('/v1/users', users)

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
