const express = require('express');
const router = express.Router();
const queries = require('../db/queries')

/* GET login page. */
router.get('/', function(req, res, next) {
  if (req.session.id) {
    res.redirect('/welcome')
  } else {
    res.render('login', {
      title: 'Login'
    });
  }
});

router.post('/', (req, res) => {
  queries.matchUsers(req.body.username, req.body.password)
    .then((data) => {
      if (data.length > 0) {
        req.session.id = data[0].id
        req.session.username = data[0].username
        res.redirect('/welcome')
      } else {
        res.render('error', {
          message: 'Please enter a valid username and password'
        })
      }
    })
})

module.exports = router;
