const router = require('express').Router();

router.get("/", (req, res) => {
    res.send("Reached auth page");
});

module.exports = router;