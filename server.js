const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Salut Raoul!");
});

app.get("/toto", (req, res) => {
  res.send("je suis pasd tot!");
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
