const router = require('express').Router();
const { User, Post } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
    try {
        const dbPostData = await Post.findAll({
          include: [{ model: User }]
        });
    
        const posts = dbPostData.map((post) =>
          post.get({ plain: true })
        );

        res.render('home', {posts});
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
});

// GET one post
router.get('/post/:id', async (req, res) => {
});

// GET one user
router.get('/user/:id', async (req, res) => {

});

module.exports = router;