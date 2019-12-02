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

app.get("/:id", (req, res, next) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    return next();
  }
  res.send(
    guns.find(gun => {
      return gun.id === Number(req.params.id);
    })
  );
});

app.get("/:name", (req, res) => {
  res.send(
    guns.find(gun => {
      return gun.name === req.params.name;
    })
  );
});

module.exports = {
  setupExpressServer
};
