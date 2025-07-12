const express = require("express");
const router = express.Router();
const {
  getSkills,
  getSkill,
  createSkill,
  updateSkill,
  deleteSkill,
} = require("../controller/skills");
const { protect, adminProtect } = require("../middleware/auth");

router.get("/", getSkills);
router.get("/:id", getSkill);

router.post("/", protect, adminProtect, createSkill);
router.put("/:id", protect, adminProtect, updateSkill);
router.delete("/:id", protect, adminProtect, deleteSkill);

module.exports = router;
