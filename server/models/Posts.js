const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema.Types

const PostSchema = new mongoose.Schema(
  {
    posted_by: {
      type: ObjectId,
      required: true,
    },
    img: {
      type: Buffer,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    likes: [
      {
        type: ObjectId,
        ref: "User",
      },
    ],
    comments: [
      {
        Text: String,
        postedBy: { type: ObjectId, ref: "User" },
      },
    ],
  },
  { timestamps: true }
)

module.exports = Posts = mongoose.model("Posts", PostSchema)
