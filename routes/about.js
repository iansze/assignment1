const express = require("express");
const router = express.Router();

router.get("/about", (req, res, next) => {
  res.render("about", {
    pageTitle: "About Me",
    path: "/about",
  });
});

module.exports = router;
