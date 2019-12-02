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

app.get("/:id", (req, res) => {
  res.send(
    guns.find(gun => {
      return gun.id === Number(req.params.id);
    })
  );
});

module.exports = {
  setupExpressServer
};
