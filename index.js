const express = require("express");
const db = require("./db");

const app = express();
app.use(express.json());
const path = require("path");
const setupExpressServer = () => {
  return app;
};

app.get("/", (req, res) => {
  res.sendFile(path.join(`${__dirname}/index.html`));
});

app.get("/guns", (req, res) => {
  db.getGuns().then(guns => {
    res.send({
      results: guns
    });
  });
});

app.get("/guns/:id", (req, res, next) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    return next();
  }
  db.getGuns().then(guns => {
    res.send(
      guns.find(gun => {
        return gun.id === Number(req.params.id);
      })
    );
  });
});

app.get("/guns/:name", (req, res) => {
  db.getGuns().then(guns => {
    res.send(
      guns.find(gun => {
        return gun.name === req.params.name;
      })
    );
  });
});

module.exports = {
  setupExpressServer
};
