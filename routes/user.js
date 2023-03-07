const express = require("express");
const router = express.Router();
const {
  addUser,
  getAllUsers,
  deleteUser,
  updateUser,
  findOneUser,
} = require("../controlles/user");


router.get("/test", (req, res) => {
  res.send("test is true");
});

router.post("/", addUser);

router.get("/", getAllUsers);

router.delete("/:userId", deleteUser);

router.put("/:userId", updateUser);

router.get("/:userId", findOneUser);

module.exports = router;