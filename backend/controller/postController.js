const express = require("express");
const Post = require("../model/postModel");
const { upload } = require("../config/uploadCloudinary");
// const Data = require("../src/data");
require("dotenv").config();

//create post
exports.createPost =
  (upload.single("cover"),
  async (req, res) => {
    const { title, description, author, category, isFeatured } = req.body;
    //console.log({ title, description, author, category, cover });
    try {
      if (!title || !description || !req.file) {
        return res.status(400).json("all fields are required");
      }
      const cover = req.file.path;
      console.log({ title, description, author, category, cover });
      const newPost = new Post({ title, description, author, category, cover });
      const post = await newPost.save();
      return res.status(200).json(post);
      // return res.status(200).json("post successfully created")
    } catch (err) {
      res.status(500).json(err);
    }
  });

//get all post for posts page
exports.getPosts = async (req, res) => {
  try {
    let posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
};

//get related post
exports.relatedPosts = async (req, res) => {
  try {
    const posts = await Post.find().limit(5);
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
};

//get single post
exports.getOnePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

//update call
exports.updatePost =
  (upload.single("cover"),
  async (req, res) => {
    const { title, description, author, category } = req.body;
    try {
      if (!title || !description || !req.file) {
        req.flash("error", "All compulsory fields are required");
        res.redirect("/post/update/" + req.params.id);
      }
      const cover = req.file.path;
      //console.log({ title, description, author, category, cover });
      await Post.findByIdAndUpdate(
        req.params.id,
        { title, description, author, categories, cover },
        { new: true }
      );
      req.flash("info", "post successfully updated");
      res.redirect("/post/admin");
    } catch (error) {
      res.status(500).json(error);
      //res.redirect("/category/create");
    }
  });

//delete call
exports.deletePost = async (req, res) => {
  try {
    await Post.findOneAndDelete(req.params.id);
    res.status(200).json({ msg: "post successfully deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
};
