const express = require("express");
const app = express();
const connectDB = require("./config/db");
const userRoutes = require("./routes/user");
const port = 5000;
connectDB();
app.use(express.json());
app.use("/api/users", userRoutes);
app.listen(port, () => {
  console.log(`serveur runing in port ${port}`);
});