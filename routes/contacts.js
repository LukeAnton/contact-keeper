const express = require("express");
const router = express.Router();

// @route       GET api/contacts
// @desc        Get all users contacts
// @access      Private
router.get("/", (req, res) => {
  res.send("Get all contacts");
});

// @route       POST api/contacts
// @desc        Add new contact
// @access      Private
router.get("/", (req, res) => {
  res.send("Add contact");
});

/// @route       PUT api/contacts/:id
// @desc        Update contact
// @access      Public
router.get("/:id", (req, res) => {
  res.send("Update contact");
});

// @route       DELETE api/contacts/:id
// @desc        Delete contact
// @access      Public
router.get("/:id", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
