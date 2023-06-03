const express = require("express");
const Room = require("../models/Room");
const router = express.Router({ mergeParams: true });

router.put("/:roomId", async (req, res) => {
  try {
    const { roomId } = req.params;
    const updatedRoom = await Room.findByIdAndUpdate(roomId, req.body, {
      new: true,
    });
    res.send(updatedRoom);
  } catch (error) {
    res.status(500).json({
      message: "An error occurred on the server. Try later",
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const list = await Room.find();
    res.status(200).send(list);
  } catch (error) {
    res.status(500).json({
      message: "An error occurred on the server. Try later",
    });
  }
});

module.exports = router;
