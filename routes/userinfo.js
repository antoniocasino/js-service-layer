var express = require('express');
var router = express.Router();

/* GET userinfo listing. */
router.get('/check/:user/role/:role', function(req, res) {
  res.send({"authorised":true});
});

module.exports = router;
