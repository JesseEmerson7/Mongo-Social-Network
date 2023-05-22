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
      default: function(){return new Date();} ,
      get: function () {
        return date.format(this.createdAt, "ddd, MMM DD YYYY hh:mm A");
      },
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [
     reactionSchema
    ],
  },
  {
    toJSON: {
        virtuals: true,
      getters: true,
    },
  }
);

thoughtSchema.virtual("reactionCount").get( function(){
    return this.reactions.length;
});

// thoughtSchema.pre();

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
