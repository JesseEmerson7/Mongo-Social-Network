# Mongo-Social-Network

  <img src= 'https://img.shields.io/badge/License-MIT-blue'>

## Description

This application is a back end build for a NoSQL mongodb and MongooseJS social media network. Using Mongoose models users, friends, thoughts, and reactions can easily be created, viewed, updated, and deleted. This app can be easily tested using Insomnia, Postman or any preferred API testing tool.

[View demo video here!](https://drive.google.com/file/d/1oEWjRDk8qHGaSvE5EatGqZ7wGyiA-cne/view)
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [How to contribute](#how-to-contribute)
- [Questions](#questions)
- [License](#license)

## Installation

If you wish to run this application locally using Node you can install all the needed modules listed in the package.json file please type "npm i" into the command line. After modules are installed run "npm run seed" and seed some starter users into the database. Then run "npm run start" to start the express localhost server on port 3001.

## Usage

To use This app you can use your preferred API development tool like insomnia or postman to make http requests. Then start the server by typing "npm run start" into the command line.

Here are the routes used for this application.

- Get all Users: http://localhost:3001/api/users
- Get User by ID: http://localhost:3001/api/users/:userId
- Post user: http://localhost:3001/api/users
- Put User by ID: http://localhost:3001/api/users/:userId
- Delete User by ID: http://localhost:3001/api/users/:userId
- Post user friend: http://localhost:3001/api/users/:userId/friends/:friendId
- Delete user friend: http://localhost:3001/api/users/:userId/friends/:friendId

- Get all thoughts: http://localhost:3001/api/thoughts
- Get thought by ID: http://localhost:3001/api/thoughts/:thoughtId
- Post new thought: http://localhost:3001/api/thoughts
- Put thought by ID: http://localhost:3001/api/thoughts/:thoughtId
- Delete thought by ID: http://localhost:3001/api/thoughts/:thoughtId
- Post thought reaction: http://localhost:3001/api/thoughts/:thoughtId/reactions
- Delete thought by ID: http://localhost:3001/api/thoughts/:thoughtId/reactions (needs "reactionId":""  in request body)

![Alt text](public/images/Screenshot%202023-05-22%20235431.png)

![Alt text](public/images/Screenshot%202023-05-22%20235449.png)

![Alt text](public/images/Screenshot%202023-05-22%20235503.png)

## How to Contribute

To contribute please email me, or request to be a contributor on Github. Then push to your branch and request a merge to the main branch and I will review the new code.

## Questions

Here is the link to my Github profile https://github.com/jesseemerson7

please <a href="mailto:jesseemerson7@gmail.com">email me</a> about any questions regarding this project. Feel free to inform me of which repository you are referring to and I can get back to you as soon as possible.

## License

MIT license.