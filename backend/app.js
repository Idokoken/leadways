const express = require("express");
const chalk = require("chalk");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const postRoute = require("./route/postRoute");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;

//Middleware setup
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Database setup
mongoose.connect(process.env.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", () => console.log(`error connecting to login-system database`));
db.once("open", () =>
  console.log(`successfully connected to ${chalk.cyan("leadways database")}`)
);

// Routes setup
app.use("/post", postRoute);
app.get("/", (req, res) => {
  console.log("leadways news blog");
  res.json("welocme to leadways");
});

app.listen(port, () => console.log(`Listening on port ${chalk.cyan(4000)}`));
