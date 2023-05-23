const { User, Thought } = require("../models");
const connection = require("../config/connection");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");
});

let data = [
  {
    username: "JesseEmerson7",
    email: "email123@gmail.com",
  },
  {
    username: "AllieW",
    email: "email556@gmail.com",
  },
  {
    username: "Austin11",
    email: "email54446@gmail.com",
  },
  {
    username: "chestnut99",
    email: "email0000@gmail.com",
  },
  {
    username: "banjo123",
    email: "email9999@gmail.com",
  },
];

const seedData = async () => {
  try {
    const createdDocuments = await User.insertMany(data);
    console.log("Documents created:", createdDocuments);
    process.exit(0);
  } catch (error) {
    console.error("Error seeding data:", error);
  }
};

seedData(data);
