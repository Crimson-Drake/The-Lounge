const router = require('express').Router();

router.get("/", (req, res) => {
    res.send("Reached users page");
});

module.exports = router;