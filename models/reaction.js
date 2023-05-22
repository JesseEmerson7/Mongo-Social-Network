const { Schema, Types } = require("mongoose");
const date = require("date-and-time");

// Schema to create thought model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      max: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      immutable: true,
      default: () => Date.now(),
      get: function () {
        return date.format(this, "ddd, MMM DD YYYY hh:mm A");
      },
    },
  },
  {
    _id: false,
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = reactionSchema;
