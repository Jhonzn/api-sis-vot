const express = require("express");
require("dotenv").config();
const connectDB = require("./configdb/db");
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
// Conectar BD
connectDB();
const app = express();

app.use(express.json()); 

app.get('/generate-token', (req, res) => {
  const testUser = {
    id: 1,
    name: "Usuario de Prueba",
    email: "test@example.com",
    role: "admin"
  };
  const token = jwt.sign(testUser, JWT_SECRET, { expiresIn: '24h' });
  res.json({
    message: "Token para pruebas en Postman",
    token: token,
    user: testUser
  });
});

app.use("/voters", require("./src/routes/votersRoutes"));
app.use("/candidates", require("./src/routes/candidatesRoutes"));
app.use("/votes", require("./src/routes/votesRoutes"));


const PORT = 8090;
app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});