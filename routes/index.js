const router = require("express").Router();
const apiRoutes = require("./api");
const path = require('path');

router.use("/api", apiRoutes);

router.use(function(req, res) {
    res.sendFile(path.resolve(__dirname, "../build", "index.html"));
});

module.exports = router;