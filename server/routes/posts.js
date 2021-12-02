const router = require("express").Router();
const Post = require("../models/Post");
const User = require('../models/User');

// Create a post
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update a post

// Delete a post

// Like / dislike a post

// Get a post

// Get timeline posts


module.exports = router;