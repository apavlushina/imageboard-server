const { Router } = require("express");
const User = require("./model");
const bcrypt = require("bcrypt");

const router = new Router();

router.post("/user", (req, res, next) => {
  const user = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  };

  User.create(user)
    .then(user => res.json(user))
    .catch(err => next(err));
});

module.exports = router;
