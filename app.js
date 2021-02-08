require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

// My routes
const operationRoutes = require("./routes/operation");

const app = express();

// DB Connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((error) => {
    console.log("DB CONNECTION ERROR\n" + error);
  })

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// My routes
app.use("/", operationRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App is running at ${port}`);
});