const router = require('express').Router();
const users = require('../models/User');

router.get("/", (req, res) => {
    res.send("Reached users page");
});

module.exports = router;