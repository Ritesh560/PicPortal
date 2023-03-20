const express = require("express")
const postsController = require("../../controllers/posts")
const auth = require("../../middleware/auth")
const router = express()

//@route GET api/users
// @desc Test route
//@access Public
router.post("/", [auth], postsController.creatPost)

router.get("/all", [auth], postsController.getAllPosts)

router.get("/:id", [auth], postsController.getPostByUserId)

module.exports = router
