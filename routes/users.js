const {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} = require("../controllers/usercontroller.js");
const {
  verifyIsAdmin,
  verifyToken,
  verifyUser,
} = require("../utils/verifytoken.js");

const router = require("express").Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("hello user, you are authenticated");
// });
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("hello user, you are logged in and you can delete your account");
// });
// router.get("/checkadmin/:id", verifyIsAdmin, (req, res, next) => {
//   res.send("hello admin, you are logged in and you can delete all accounts");
// });

// UPDATE
router.put("/:id", verifyUser, updateUser);

// DELETE
router.delete("/:id", verifyUser, deleteUser);

// GET
router.get("/:id", verifyUser, getUser);

// GET ALL
router.get("/", verifyIsAdmin, getAllUsers);

// export default router;
module.exports = router;
