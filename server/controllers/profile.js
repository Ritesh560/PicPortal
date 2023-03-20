exports.getProfile = (req, res) => {
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
