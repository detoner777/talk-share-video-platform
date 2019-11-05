const express = require("express");
const router = express.Router();
const { contactForm } = require("../controllers/form");

// validators
const { runValidation } = require("../validators");
const { contactFormValidator } = require("../validators/form");

router.post("/contact", contactFormValidator, runValidation, contactForm);
router.post(
  "/contact-blog-auth",
  contactFormValidator,
  runValidation,
  contactForm
);

module.exports = router;
