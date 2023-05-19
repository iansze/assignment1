const express = require("express");
const router = express.Router();

router.get("/projects", (req, res, next) => {
  res.render("projects", {
    pageTitle: "Projects",
    path: "/projects",
  });
});

module.exports = router;
