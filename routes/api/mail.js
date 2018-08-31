const router = require("express").Router();
const MailController = require('../../controllers/MailController');

//matches api/mail
router.route("*")
    .post(MailController.sendMail);

module.exports = router;