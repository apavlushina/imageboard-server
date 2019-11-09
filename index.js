const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
app.get("/test", (req, res) => res.send("Hello stranger!"));

const cors = require("cors");
const corsMiddleware = cors();
app.use(corsMiddleware);

const bodyParser = require("body-parser");
const parserMiddleware = bodyParser.json();
app.use(parserMiddleware);

const imageRouter = require("./image/router");
app.use(imageRouter);

const loginRouter = require("./auth/router");
app.use(loginRouter);

const usesrRouter = require("./user/router");
app.use(usesrRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));

const db = require("./db");
const model = require("./image/model");
