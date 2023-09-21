const express = require("express");
const chalk = require("chalk");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const userRoute = require("./route/userRoute");
const postRoute = require("./route/postRoute");
const User = require("./model/userModel");
const auth = require("./middleware/auth");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;

//Middleware setup
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Database setup
mongoose.connect(process.env.MONGO_URI2, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", () => console.log(`error connecting to login-system database`));
db.once("open", () =>
  console.log(
    `successfully connected to ${chalk.cyan("login-system database")}`
  )
);

// Routes setup
app.use("/user", userRoute);
app.use("/post", postRoute);
// app.get("/profile", (req, res) => {
//   // res.json({ msg: "Welcome to Iwosan" });
//   const { token } = req.cookies;
//   if (token) {
//     jwt.verify(token, process.env.JWT_SECRET, {}, async (err, userInfo) => {
//       if (err) throw err;
//       const { name, email, _id } = await User.findById(userInfo.id);
//       res.json({ name, email, _id });
//     });
//   } else {
//     res.json(null);
//   }
// });
app.post("/logout", (req, res) => {
  res.cookie("token", "").json(true);
});
app.get("/user", auth, async (req, res) => {
  const profile = await User.findById(req.user._id);
  res.send(profile);
});

app.listen(port, () => console.log(`Listening on port ${chalk.cyan(4000)}`));
