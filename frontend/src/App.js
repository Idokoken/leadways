import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SinglePost from "./pages/SinglePost";
import PostPage from "./pages/PostPage";
import AdminPage from "./pages/admin/AdminPage";
import AddPostPage from "./pages/admin/AddPostPage";
import EditPostPage from "./pages/admin/EditPostPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/posts" element={<PostPage />} />

        <Route path="/admin/okoro" element={<AdminPage />} />
        <Route path="/addpost" element={<AddPostPage />} />
        <Route path="/editpost/:id" element={<EditPostPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
