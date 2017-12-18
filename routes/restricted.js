var express = require('express');
var router = express.Router();

/* GET welcome page. */
router.get('/', function(req, res, next) {
  if (req.session.id) {
    res.render('restricted', {
      title: 'Welcome',
      username: req.session.username
    });
  } else {
    res.redirect('/')
  }
});

module.exports = router;
