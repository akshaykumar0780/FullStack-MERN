const { Router } = require("express");
const {
  handleSignup,

  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const signupValidation = require("../middleware/userValidator");

const router = Router();

router.post("/signup", signupValidation, handleSignup);
// router.post("/login", loginValidation, handleLogin);

router.get("/", getUsers);
router.get("/:id", getUserById);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;
