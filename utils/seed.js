const { User, Thought } = require("../models");
const connection = require('../config/connection')

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
}
)

User.create({
    username:"JesseEmerson7",
    email:"email123@gmail.com"
})