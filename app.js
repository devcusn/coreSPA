const express = require("express");
const path = require("path");
const app = express();

const port = 3000;

app.use("/index.bundle.js", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.bundle.js"));
});
app.use("/global/global.css", (req, res) => {
  res.sendFile(path.join(__dirname, "global", "global.css"));
});
app.use("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log("server listening", port);
});
