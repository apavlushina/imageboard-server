const { Router } = require("express");
const Image = require("./model");
const auth = require("../auth/middleware");

const router = new Router();

router.get("/image", (req, res, next) => {
  Image.findAll()
    .then(images => res.send(images))
    .catch(err => next(err));
});

router.post("/image", auth, (req, res, next) => {
  Image.create(req.body)
    .then(console.log(req.body))
    .then(image => res.json(image))
    .catch(err => next(err));
});

module.exports = router;
