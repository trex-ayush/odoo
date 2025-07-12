const mongoose = require("mongoose");

const swapSchema = new mongoose.Schema(
  {
    requester: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Requester is required"],
    },
    recipient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Recipient is required"],
    },
    offeredSkill: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Skill",
      required: [true, "Offered skill is required"],
    },
    requestedSkill: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Skill",
      required: [true, "Requested skill is required"],
    },
    status: {
      type: String,
      enum: {
        values: ["pending", "accepted", "rejected", "completed"],
        message: "Invalid swap status",
      },
      default: "pending",
      index: true,
    },
    proposedTime: {
      type: Date,
    },
    message: {
      type: String,
      maxlength: [500, "Message cannot exceed 500 characters"],
    },
    rating: {
      type: Number,
      default: 0,
      min: [0, "Rating must be at least 0"],
      max: [5, "Rating cannot exceed 5"],
    },
    feedback: {
        type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Swap", swapSchema);
