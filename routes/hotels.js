const router = require("express").Router();

const {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  getHotelRooms,
  updateHotel,
} = require("../controllers/hotelcontroller.js");

const { verifyIsAdmin } = require("../utils/verifytoken.js");

// CREATE
router.post("/", verifyIsAdmin, createHotel);

// UPDATE
router.put("/:id", verifyIsAdmin, updateHotel);

// DELETE
router.delete("/:id", verifyIsAdmin, deleteHotel);

// GET
router.get("/find/:id", getHotel);

// GET ALL
router.get("/", getAllHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

module.exports = router;

// export default router;
