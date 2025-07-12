const mongoose = require("mongoose");

const swapSchema = new mongoose.Schema({
    requester: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    recipient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    offeredSkill: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Skill",
      required: true,
    },
    requestedSkill: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Skill",
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected", "completed"],
      default: "pending",
    },
    requesterRating: {
      rating: {
        type: Number,
        min: 1,
        max: 5,
      },
      feedback: String,
      givenAt: {
        type: Date,
        default: Date.now,
      },
    },
    recipientRating: {
      rating: {
        type: Number,
        min: 1,
        max: 5,
      },
      feedback: String,
      givenAt: {
        type: Date,
        default: Date.now,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Swap", swapSchema);
