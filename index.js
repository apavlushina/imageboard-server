const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
app.get("/test", (req, res) => res.send("Hello stranger!"));
app.listen(port, () => console.log(`Listening on port ${port}`));

const db = require("./db");
