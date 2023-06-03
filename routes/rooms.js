const {
  createRoom,
  deleteRoom,
  getAllRooms,
  getRoom,
  updateRoom,
  updateRoomAvailability,
} = require("../controllers/roomcontroller.js");
const router = require("express").Router();

const { verifyIsAdmin } = require("../utils/verifytoken.js");

// CREATE
router.post("/:hotelid", verifyIsAdmin, createRoom);

// UPDATE
router.put("/:id", verifyIsAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);

// DELETE
router.delete("/:id/:hotelid", verifyIsAdmin, deleteRoom);

// GET
router.get("/:id", getRoom);

// GET ALL
router.get("/", getAllRooms);

module.exports = router;

// export default router;
