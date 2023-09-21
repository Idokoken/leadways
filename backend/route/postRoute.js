const express = require("express");
const {
  getPosts,
  getOnePost,
  createPost,
  relatedPosts,
  updatePost,
  deletePost,
} = require("../controller/postController");

const postRoute = express.Router();

postRoute.post("/", createPost);
postRoute.get("/", getPosts);
postRoute.get("/:id", getOnePost);
postRoute.get("/related", relatedPosts);
postRoute.put("/:id", updatePost);
postRoute.delete("/:id", deletePost);

module.exports = postRoute;
