const { Schema, model } = require("mongoose");
const date = require("date-and-time");
const reactionSchema = require("./reaction");
const { schema } = require("./user");

// Schema to create thought model
const thoughtSchema = new Schema(
  {
    thoughtText: String,
    createdAt: {
      type: Date,
      immutable: true,
      default: Date.now,
      get: (dateObj) => {
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();

        var newDate = year + "/" + month + "/" + day;
        return newDate;
      },
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
      getters: true,
    },
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
