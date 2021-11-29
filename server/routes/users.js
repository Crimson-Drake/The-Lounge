const router = require('express').Router();
const User = require('../models/User');

router.get("/", (req, res) => {
    res.send("Reached users page");
});

// update user
// delete user
// get a user
// follow users
// unfollow users

module.exports = router;