const { Schema, Types } = require("mongoose");
const date = require("date-and-time");

// Schema to create reaction sub document inside of thought model
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
      default: Date.now,
      get: (dateObj) => {
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();

        var newDate = year + "/" + month + "/" + day;
        return newDate;
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
