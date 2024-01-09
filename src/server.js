require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const userAPIRoutes = require("./routes/api");
const connection = require("./config/db");

const app = express();
const port = process.env.PORT || 8081;

configViewEngine(app);

app.use("/", webRoutes);
app.use("/api/user", userAPIRoutes);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Program run on port ${port}`);
});
