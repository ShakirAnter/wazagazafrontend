const express = require("express");
const app = express();
const userRouter = require("./routers/userRouter");
const path = require("path");
const bodyParser = require("body-parser");
const {
  removeTrailingSlashes,
} = require("./middlewares/RemoveTrailingSlashes");
const connectDB = require("./db/connectDB");
require("dotenv").config();

app.set('View engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "views")));
app.use(bodyParser.json());
app.use(removeTrailingSlashes);

app.use("/", userRouter);

// Define a middleware function for handling 404 errors
const handle404Error = (req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.ejs"));
  res.render("404.ejs");
};

// Add the 404 middleware function at the end of the middleware stack
app.use(handle404Error);
const port = process.env.PORT;
const start = async (req, res) => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server running on port ${port} http://localhost:${port}`)
    );
  } catch (error) {
    console.error(error);
    return res.status(500).send(error);
  }
};

start();
