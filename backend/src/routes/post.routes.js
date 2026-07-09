const express = require("express");
const router = express.Router();
const multer = require("multer");
const authMiddleware = require("../middleware/auth.middleware");
const postController = require("../controllers/post.controller");
const upload = multer({
    storage: multer.memoryStorage(),
})
router.post(
    "/create-post",
    authMiddleware,
    upload.single("image"),
    postController.createPost,
)

router.get("/post", postController.getAllPosts)
router.get(
    "/user-post",
    authMiddleware,
    postController.getUserPosts
)

module.exports = router;