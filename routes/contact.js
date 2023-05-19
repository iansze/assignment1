const express = require("express");
const router = express.Router();

router.get("/contact", (req, res, next) => {
  res.render("contact", {
    pageTitle: "Contact Me",
    path: "/contact",
  });
});

router.post("/contact", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
