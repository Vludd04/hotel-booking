const express = require("express");
const router = express.Router({ mergeParams: true });

router.use("/auth", require("./auth.routes"));
router.use("/user", require("./user.routes"));
router.use("/cities", require("./cities.routes"));
router.use("/hotels", require("./hotels.routes"));
router.use("/rooms", require("./rooms.routes"));

module.exports = router;
