const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
app.get("/test", (req, res) => res.send("Hello stranger!"));

const imageRouter = require("./image/router");
app.use(imageRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));

const db = require("./db");
const model = require("./image/model");
