const express = require('express');
const {
    getPosts,
    createPost,
    updatePost,
    deletePost,
    likePost,
} = require('../controller/postController');

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.delete('/:id', deletePost);
router.patch('/:id', updatePost);
router.patch('/:id/likePost', likePost);

module.exports = router;
