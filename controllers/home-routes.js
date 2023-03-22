const router = require('express').Router();
const { User, Post } = require('../models');
const checkID = require('../helpers/checkID.js');

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
router.get('/post/:id', checkID, async (req, res) => {
    try {
        const dbPostData = await Post.findByPk(req.params.id, {
          include: [{ model: User }]
        });
        const post = dbPostData.get({ plain: true });
        res.render('singlepost', {post});
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
});

// GET one user
router.get('/user/:id', async (req, res) => {

});

module.exports = router;