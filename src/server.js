require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const userAPIRoutes = require("./routes/api");

const app = express();
const port = process.env.PORT || 8081;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

configViewEngine(app);

app.use("/api/user", userAPIRoutes);
app.use("/", webRoutes);

app.listen(port, () => {
  console.log(`Program run on port ${port}`);
});
