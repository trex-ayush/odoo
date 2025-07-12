const express = require("express");
const router = express.Router();
const {
  viewMyProfile,
  updateProfile,
  viewAllFriends,
  sendFriendRequest,
  respondToFriendRequest,
  viewSentRequests,
  viewReceivedRequests,
  removeFriend,
  viewMyFriends,
  banUser,
  unbanUser,
  approveSkill,
  rejectSkill,
} = require("../controller/users");
const { protect, adminProtect } = require("../middleware/auth");

router.get("/me", protect, viewMyProfile);
router.put("/me", protect, updateProfile);
router.get("/friends", protect, viewAllFriends);
router.get("/friends/me", protect, viewMyFriends);
router.post("/friends/request/:userId", protect, sendFriendRequest);
router.put("/friends/respond/:requestId", protect, respondToFriendRequest);
router.get("/friends/requests/sent", protect, viewSentRequests);
router.get("/friends/requests/received", protect, viewReceivedRequests);
router.delete("/friends/:friendId", protect, removeFriend);
router.put("/admin/ban/:userId", protect, adminProtect, banUser);
router.put("/admin/unban/:userId", protect, adminProtect, unbanUser);
router.put("/admin/skills/approve/:skillId", protect, adminProtect, approveSkill);
router.put("/admin/skills/reject/:skillId", protect, adminProtect, rejectSkill);

module.exports = router;