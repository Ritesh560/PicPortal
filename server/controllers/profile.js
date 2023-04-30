const User = require("../models/User")

exports.getProfile = (req, res) => {
  const user_id = req.user_id

  User.find({ _id: user_id })
    .select("-password")
    .then((user) => {
      Posts.find({ posted_by: user_id })
        .populate("posted_by", "_id name")
        .exec((err, res) => {
          res.send("abc")
        })
    })
    .catch((err) => res.status(400).send({ error: { msg: "user does not exist" } }))

  res.status(200).send("getProfile")
}

exports.follow = (req, res) => {
  res.status(200).send("follow")
}

exports.bookmark = (req, res) => {
  res.status(200).send("bookmark")
}

exports.getFollowers = (req, res) => {
  res.status(200).send("getFollowers")
}

exports.getFollowings = (req, res) => {
  res.status(200).send("getFollowings")
}

exports.getBookmarks = (req, res) => {
  res.status(200).send("getBookmarks")
}
