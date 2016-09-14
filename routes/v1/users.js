const express = require('express')
const router = express.Router()
const expressSession = require('express-session')
const passport = require('passport')
const verifyJwt = require('express-jwt')
const verifyCB = require('../../auth/verifyCB')

const db = require('../../lib/database')

module.exports = router

const session = expressSession({
  resave: false,
  secret: process.env.SESSIONS,
  saveUninitialized: false
})

function getSecret (req, payload, done) {
  done(null, req.app.get('JWT_SECRET'))
}


router.get("/:id", (req, res) => {
  let id = req.params.id
  db.getUserDetails(id)
    .then((data) => {
      res.json({data: data})
    })
    .catch(() => res.sendStatus(500))
})


router.put('/:id/tutorial',
  verifyJwt({
    getToken: verifyCB.getTokenFromCookie,
    secret: getSecret
  }),
  (req, res) => {
    const id = req.params.id
    const tutorial = req.body.tutorial
    const skill_id = req.body.skill_id

    const url = "https://www.youtube.com/embed/" + getId(tutorial)

    db.addTutorialVideo(skill_id, url)
    .then((data) => {
      if(data) {
        db.uploadTutorial(id, skill_id, url)
            .then(() => {
              db.getUserDetails(id)
                .then((data) => {
                  res.json({data: data}).status(201)
                })
                .catch(() => res.sendStatus(500))
            })
            .catch(() => res.sendStatus(500))
      } else {
        db.getUserDetails(id)
          .then((data) => {
            data.message = "This video has already been uploaded!"
            res.json({data: data}).status(201)
          })
          .catch(() => res.sendStatus(500))
      }
    })
    .catch(() => res.sendStatus(500))
})


router.put("/:id/status",
  verifyJwt({
    getToken: verifyCB.getTokenFromCookie,
    secret: getSecret
  }),
  (req, res) => {
    const status = req.body.status
    const skill_id = req.body.skill_id
    const user_id = req.params.id


    db.checkIfUserHasSkill(user_id, skill_id)
      .then(user => {
        if (user[0]) {
          db.statusUpdate (user_id, skill_id, status)
            .then((data) => {
              res.json({data: data[0]}).status(202)
            })
            .catch((err) => {
              console.log("Error updating user in DB")
              res.sendStatus(500)
            })
        } else {
          db.addSkillToUser (user_id, skill_id, status)
            .then((data) => {
              res.json({data: data[0]}).status(201)
            })
            .catch((err) => {
              console.log("Error adding user in DB")
              res.sendStatus(500)
            })
          }
      })
})


router.get('/:id/random', (req, res) => {
  const id = req.params.id
  db.random(id)
    .then((data) => {
      res.json({data: data})
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    })
})

router.get('/:video_id/comments', (req, res) => {
  const video_id = req.params.video_id

  db.getVideoComments (video_id)
    .then((data) => {
      res.json({data: data})
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    })
})


router.post('/:id/comments',
  verifyJwt({
    getToken: verifyCB.getTokenFromCookie,
    secret: getSecret
  }),
  (req, res) => {
    const user_id = req.params.id
    const video_id = req.body.video_id
    const comment = req.body.comment

    db.addComments (user_id, video_id, comment)
      .then((data) => {
        res.json({data: data})
      })
      .catch((err) => {
        console.log(err)
        res.sendStatus(500)
      })
})

function getId (url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
    const match = url.match(regExp)

    if (match && match[2].length == 11) {
        return match[2]
    } else {
        return 'error'
    }
}


router.delete('/:id/videos/:video_id',
  verifyJwt({
    getToken: verifyCB.getTokenFromCookie,
    secret: getSecret
  }),
  (req, res) => {
  const id = req.params.id
  const video_id = req.params.video_id

  db.deleteVideo (video_id)
    .then((data) => {
      db.getUserDetails(id)
      .then((result) => {
        res.json({data: result})
      })
    })
    .catch(() => res.sendStatus(500))
})
