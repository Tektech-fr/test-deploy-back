const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const usersRoutes = require("./routes/usersRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", routes);
app.use("/users", usersRoutes);

const PORT = process.env.PORT || 3200;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
