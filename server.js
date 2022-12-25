require("dotenv").config();
const express = require("express");
const path = require("path");
const helmet = require("helmet");
const router = require("./routes/openai.route");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type,Origin,Accept,X-Requested-With,Authorization"
  );
  next();
});

// routes
app.use("/", router);

app.listen(PORT, () => console.log("Server running on port...", PORT));
