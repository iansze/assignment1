const express = require("express");
const router = express.Router();

router.get("/services", (req, res, next) => {
  res.render("services", {
    pageTitle: "Services",
    path: "/services",
  });
});

module.exports = router;
