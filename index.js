const express = require("express");
const app = express();
app.use(express.json());

const { guns } = require("./seedGuns");

const setupExpressServer = () => {
  return app;
};

app.get("/", (req, res) => {
  res.send({ results: guns });
});

module.exports = {
  setupExpressServer
};
