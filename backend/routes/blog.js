const express = require("express");
const router = express.Router();
const { blogRoute } = require("../controllers/blog");

router.get("/", blogRoute);

module.exports = router;
