const { Schema, model } = require("mongoose");
const Reaction = require("./Reaction");

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtTest: {
      type: String,
      minLength: 1,
      maxLength: 280,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: string,
      required: true,
    },
    reactions: [Reaction],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `reactions` that gets the amount of reactions per thought
thoughtSchema
  .virtual("reactionCount")
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our Thought model
const Thought = model("thought", thoughtSchema);

module.exports = Thought;
