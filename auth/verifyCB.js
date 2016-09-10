const db = require('../lib/database')

module.export = function (token, tokenSecret, profile, done) {
  process.nextTick(function() {
    db.getUserById(profile.id)
      .then((user) => {
        if (user) {
          return done(null, user)
        } else {
          db.addUser(profile.id, profile.displayName, profile.photos[0])
            .then((user) => {
              return done(null, user)
            })
            .catch((err) => {
              return done(err, null)
            })
        }
      })
      .catch((err) => {
        return done(err, null)
      })
  })
}
