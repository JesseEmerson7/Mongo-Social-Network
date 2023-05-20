const { Schema, model } = require("mongoose");

const validateEmail = (email) => {
  // Regular expression for email validation
  return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(
    email
  );
};

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: string,
      required: true,
      unique: true,
      lowercase: true,
      validate: {
        validator: validateEmail,
        message: "Please enter a valid email address",
      },
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model("user", userSchema);

module.exports = User;
