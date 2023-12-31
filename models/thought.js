// Imports
const { Schema, model } = require("mongoose");
const reactionSchema = require("./reaction");

// Define Thought schema
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Virtual property to calculate the reaction count
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Create Thought model using thoughtSchema
const Thought = model("Thought", thoughtSchema);

// Export the Thought model
module.exports = Thought;
