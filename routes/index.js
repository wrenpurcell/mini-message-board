var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages });

});

router.get('/new', function (req, res, next) {
  res.render('form', { title: "New Message Form" });
});

router.post('/new', function (req, res, next) {
  let messageText = req.body.messageText;
  let authorName = req.body.authorName;
  messages.push({ text: messageText, user: authorName, added: new Date() });
  res.redirect('/');
});

module.exports = router;
