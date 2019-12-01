const express = require("express");
const app = express();
app.use(express.json());
const setupExpressServer = () => {
  return app;
};

app.get("/hello", (req, res) => {
  res.send("world");
});

module.exports = {
  setupExpressServer
};
