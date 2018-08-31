const router = require("express").Router();
const mailRoute = require("./mail");

router.use("/mail", mailRoute);

module.exports = router;