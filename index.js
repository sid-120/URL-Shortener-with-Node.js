const express = require("express");
const URL = require("./models/url");
const { connectToMongoDB } = require("./connect");
const path = require("path");
const cookieParser = require("cookie-parser");
const { restrictToLoggedinUserOnly, checkAuth } = require("./Middleware/auth");

const urlRoute = require("./routes/url");
const userRoute = require("./routes/user");
const staticRoute = require("./routes/staticRouter");

const app = express();
const PORT = 8001;

// MongoDB Database connection locally
connectToMongoDB(process.env.MONGODB ?? "mongodb://localhost:27017/short-url")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error", err));

// setting up the view folder for ejs files
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/url", restrictToLoggedinUserOnly, urlRoute);
app.use("/user", userRoute);
app.use("/", checkAuth, staticRoute);

app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    { $push: { visitHistory: { timestamp: Date.now() } } }
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
