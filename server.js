const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Salut Matthieu!");
});

app.get("/toto", (req, res) => {
  res.send("je suis Toto!");
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
