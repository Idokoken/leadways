const express = require("express");
const Post = require("../model/postModel");
const { upload } = require("../config/uploadCloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
require("dotenv").config();

const postRoute = express.Router();

//create post
postRoute.post("/", upload.single("cover"), async (req, res) => {
  const { title, description, author, category } = req.body;
  // console.log({ title, description, author, category, cover });
  try {
    if (!title || !description || !req.file) {
      return res.status(400).json("all fields are required");
    }
    // console.log(req.file);
    // console.log(req.body);

    const cover = req.file.path;
    // console.log({ title, description, author, category, cover });
    const newPost = new Post({
      title,
      description,
      author,
      category,
      cover,
    });
    const post = await newPost.save();
    console.log(post);
    // return res.status(200).json(post);

    return res.status(200).json("post successfully created");
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all post for posts page
postRoute.get("/", async (req, res) => {
  try {
    let posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get related post
postRoute.get("/related", async (req, res) => {
  try {
    const posts = await Post.find().limit(5);
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get featured Posts
postRoute.get("/featured", async (req, res) => {
  try {
    const posts = await Post.find({ isFeatured: true })
      .sort({ createdAt: -1 })
      .limit(2);
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get latest Posts
postRoute.get("/latest", async (req, res) => {
  try {
    const posts = await Post.find({ isFeatured: false })
      .sort({ createdAt: -1 })
      .limit(6);
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get single post
postRoute.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update call
postRoute.put("/:id", upload.single("cover"), async (req, res) => {
  const { title, description, author, category, isFeatured } = req.body;
  console.log(req.body);
  let cover;
  try {
    if (!title || !description) {
      res.status(400).json("all fields are required");
    }
    if (req.file != null && req.file != "") {
      cover = req.file.path;
    }

    //console.log({ title, description, author, category, cover });
    await Post.findByIdAndUpdate(
      req.params.id,
      { title, description, author, category, cover, isFeatured },
      { new: true }
    );
    res.status(200).json("successfully updated");
  } catch (error) {
    res.status(500).json(error);
  }
});

//delete call
postRoute.delete("/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json("post successfully deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

// update post together with cloudinary image
// postRoute.put("/edit/:id", upload.single("cover"), async (req, res) => {
//   const { title, description, author, category } = req.body;
//   try {
//     //find post by id
//     let post = await Post.findById(req.params.id);
//     //delete image from cloudinary
//     await cloudinary.uploader.destroy(post.cloudinary_id);
//     //upload image to cloudnary
//     const result = await cloudinary.uploader(req.file.path);
//     const data = {
//       title: title || post.title,
//       author: author || post.author,
//       category: category || post.category,
//       description: description || post.description,
//       cover: result.secure_url || post.cover,
//       cloudinary_id: result.public_id || post.cloudinary_id,
//     };
//     post = await Post.findByIdAndUpdate(req.params.id, data, { new: true });
//     res.status(200).json(post);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//delete call
// postRoute.delete("/:id", async (req, res) => {
//   try {
//     //find post by id
//     let post = await Post.findById(req.params.id);
//     //delete image from cloudinary
//     await cloudinary.uploader.destroy(post.cloudinary_id);
//     await post.remove();
//     res.status(200).json("post successfully deleted");
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = postRoute;
