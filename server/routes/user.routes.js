const express = require("express");
const User = require("../models/User");
const auth = require("../middleware/auth.middleware");
const router = express.Router({ mergeParams: true });

router.get("/", auth, async (req, res) => {
  try {
    const list = await User.find();
    res.send(list);
  } catch (error) {
    res.status(500).json({
      message: "An error occurred on the server. Try later",
    });
  }
});

router.patch("/:userId", auth, async (req, res) => {
  try {
    const { userId } = req.params;
    if (userId === req.user._id) {
      const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
        new: true,
      });
      res.send(updatedUser);
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    res.status(500).json({
      message: "An error occurred on the server. Try later",
    });
  }
});

router.put("/:userId/rooms/:roomId", auth, async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    const updatedRooms = {
      rooms: [...user.rooms, req.body.toString()],
    };
    const updatedUser = await User.findByIdAndUpdate(userId, updatedRooms, {
      new: true,
    });
    res.send(updatedUser);
  } catch (error) {
    res.status(500).json({
      message: "An error occurred on the server. Try later",
    });
  }
});

router.delete("/:userId/rooms/:roomId", auth, async (req, res) => {
  try {
    const { userId, roomId } = req.params;
    const user = await User.findById(userId);
    const updatedRooms = {
      rooms: user.rooms.filter((r) => r !== roomId),
    };
    const updatedUser = await User.findByIdAndUpdate(userId, updatedRooms, {
      new: true,
    });
    res.send(updatedUser);
  } catch (error) {
    res.status(500).json({
      message: "An error occurred on the server. Try later",
    });
  }
});

module.exports = router;
