const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const config = require("./config/index");
//connect db
const mongoose = require("mongoose");
mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const staffRouter = require("./routes/staff");
const shopRouter = require("./routes/shop");
const menuRouter = require("./routes/menu");

const app = express();

app.use(logger("dev"));
app.use(
  express.json({
    limit: "100mb",
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/staff", staffRouter);
app.use("/api/shop", shopRouter);
app.use("/api/menu", menuRouter);

module.exports = app;
