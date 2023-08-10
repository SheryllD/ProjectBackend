const { Schema, model } = require("mongoose");

const todoSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  text: {
		type: String,
		required: true
	},
	complete: {
		type: Boolean,
		default: false
	},
	timestamp: {
		type: String,
		default: Date.now()
	}
});

const TodoItem = model("TodoItem", todoSchema);

module.exports = TodoItem;
