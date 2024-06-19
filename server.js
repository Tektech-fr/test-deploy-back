const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <style>
          :root {
            color-scheme: light dark;
          }
          
          body {
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          p {
            font-size: 2rem;
            font-family: Arial, sans-serif;
          }
        </style>
      </head>
      <body>
        <p>Bonjour, ce back vous est diligemment offert par Express !</p>
        <p>Si vous êtes de la Wild, vous êtes des BG.</p>
      </body>
    </html>
  `);
});

app.get("/toto", (req, res) => {
  res.json({ message: "je suis pas Toto!" });
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
