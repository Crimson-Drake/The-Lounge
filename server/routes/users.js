const router = require('express').Router();
const User = require('../models/User');

router.get("/", (req, res) => {
    res.send("Reached users page");
});

module.exports = router;