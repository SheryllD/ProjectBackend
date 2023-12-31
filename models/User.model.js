const mongoose = require("mongoose");

const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Name is required."],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    birth: {
      type: Date,
    },
    gender: {
      type: String,
      enum: ["", "female", "male", "non-binary"],
    },
    energyLevel: {
      type: String,
      enum: ["", "very low", "low", "moderate", "high", "very high"],
    },
    moods: {
      type: String,
      enum: [
        "sad",
        "calm",
        "happy",
        "stressed",
        "worried",
        "borred",
        "tired",
        "ecstatic",
        "excited",
      ],
    },
    notesList: {
      type: String,
    },
    pomodoro: {
      type: Number,
    },
    sleepQuality: {
      type: String,
      enum: ["great", "good", "ok", "bad", "poor"],
    },
    toDoList: {
      type: String,
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
