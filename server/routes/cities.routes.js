const express = require("express");
const City = require("../models/City");
const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  try {
    const list = await City.find();
    res.status(200).send(list);
  } catch (error) {
    res.status(500).json({
      message: "An error occurred on the server. Try later",
    });
  }
});

module.exports = router;
