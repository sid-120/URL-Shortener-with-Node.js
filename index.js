const express = require("express");
const urlRoute = require("./routes/url");
const { connectToMongoDB } = require("./connect");

const app = express();
const PORT = 8001;

// MongoDB Database connection locally
connectToMongoDB("mongodb://localhost:27017/short-url")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error", err));

// Middleware
app.use(express.json());

app.use("/user", urlRoute);

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
