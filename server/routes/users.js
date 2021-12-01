const router = require('express').Router();
const User = require('../models/User');

router.get("/", (req, res) => {
    res.send("Reached users page");
});

// update user
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (err) {
                return res.status(500).json(err);
            }
        }

        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json("Account has been updated");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else  {
        return res.status(403).json("You can't update this user");
    }
});
// delete user
// get a user
// follow users
// unfollow users

module.exports = router;