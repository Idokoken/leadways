import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SinglePost from "./pages/SinglePost";
import PostPage from "./pages/PostPage";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout";
import jwtDecode from "jwt-decode";
import setAuthToken from "./setAuthToken";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  let logUser;
  if (localStorage.token) {
    const jwt = localStorage.getItem("token");
    setAuthToken(jwt);
    logUser = jwtDecode(jwt);
    console.log(logUser);
  }
  const [user, setUser] = useState(logUser);

  return (
    <Router>
      <Header user={user} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/posts" element={<PostPage />} />

        <Route path="/login" element={<LoginPage user={user} />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<PrivateRoute user={user} />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
