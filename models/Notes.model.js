const { Schema, model } = require("mongoose");

const notesSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  // complete: {
  //   type: Boolean,
  //   default: false,
  //  },
  timestamps: {
    type: String,
    default: Date.now(),
  },
});

const Notes = model("Notes", notesSchema);

module.exports = Notes;
