require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

const session = require("express-session");
const passport = require("passport");
const cors = require("cors");

require("./configs/passport");

mongoose
  .connect("mongodb://localhost/job-blog", {
    useNewUrlParser: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(`${app_name}:${path.basename(__filename).split(".")[0]}`);

const app = express();

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5555"]
  })
);

// Express View engine setup

app.use(
  require("node-sass-middleware")({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    sourceMap: true
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

// ADD SESSION SETTINGS HERE:

const MongoStore = require("connect-mongo")(session);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);
// USE passport.initialize() and passport.session() HERE:
app.use(passport.initialize());
app.use(passport.session());

// default value for title local
app.locals.title = "Express - Generated with IronGenerator";

// ADD CORS SETTINGS HERE TO ALLOW CROSS-ORIGIN INTERACTION:

// ROUTES MIDDLEWARE STARTS HERE:

const index = require("./routes/index");
app.use("/", index);

const portfolio = require("./routes/portfolio");
app.use("/portfolio", portfolio);

const imgUpload = require("./routes/imgUpload");
app.use("/imgUpload", imgUpload);

// const projectRoutes = require("./routes/project");
// app.use("/api/projects", projectRoutes);

// const taskRoutes = require("./routes/task");
// app.use("/api/tasks", taskRoutes);

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// const cvRoutes = require("./routes/cv");
// app.use("/api/cv", cvRoutes);

const userRoutes = require("./routes/userform");
app.use("/", userRoutes);

module.exports = app;
