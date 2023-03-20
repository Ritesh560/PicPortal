const express = require("express")
const profileController = require("../../controllers/profile")
const auth = require("../../middleware/auth")
const router = express()

//@route GET api/users
// @desc Test route
//@access Public
router.get("/", [auth], profileController.getProfile)
router.post("/follow", [auth], profileController.follow)
router.get("/:id/followers", [auth], profileController.getFollowers)
router.get("/:id/followings", [auth], profileController.getFollowings)
router.post("/bookmark", [auth], profileController.bookmark)
router.post("/bookmarks", [auth], profileController.getBookmarks)

module.exports = router
