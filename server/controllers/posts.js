exports.creatPost = (req, res) => {
  res.status(200).send("Success")
}

exports.getPostByUserId = (req, res) => {
  const id = req.params.id
  res.status(200).send(id)
}

exports.getAllPosts = (req, res) => {
  res.status(200).send("all posts")
}
