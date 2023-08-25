const express = require("express");
const router = express.Router();
const fileInfo = require("../models/fileInfo");
const { body, validationResult } = require("express-validator");

// get all fileInfo using GET : "/api/fileInfo/fetchallfileInfo" . login required.
router.get(
  "/fetchfileinfo",

  async (req, res) => {
    let filesData = await fileInfo.find({});

    try {
      res.send(filesData);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error Occured");
    }
  }
);

module.exports = router;
