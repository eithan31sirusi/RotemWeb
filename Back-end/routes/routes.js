const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require("../models/signupModel");

router.post("/signup", (req, res) => {
  const signUpUser = new signUpTemplateCopy({
    fullName: req.body.fullName,
    userName: req.body.userName,
    email: req.body.email,
    pass: req.body.pass,
  });
  signUpUser
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
