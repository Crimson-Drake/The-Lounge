const router = require('express').Router();
const User = require('../models/User');

// Register
router.get("/register", async (req, res) => {
    const user = await new User({
        username: "dragonis",
        email: "dragonis@gmail.com",
        password: "dragonRoar"
    });

    await user.save();
    res.send("Saved");
});

module.exports = router;