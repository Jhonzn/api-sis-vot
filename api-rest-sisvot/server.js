const express = require("express");
require("dotenv").config();
const connectDB = require("./configdb/db");

// Conectar BD
connectDB();
const app = express();

app.use(express.json());

app.use("/token", require("./src/routes/tokenRoutes"))
app.use("/voters", require("./src/routes/votersRoutes"));
app.use("/candidates", require("./src/routes/candidatesRoutes"));
app.use("/votes", require("./src/routes/votesRoutes"));


const PORT = 8090;
app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
