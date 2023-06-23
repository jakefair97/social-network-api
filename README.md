# Social Network API   

## Description
This Node application was created to utilize API endpoints to update a MongoDB database on a social network style website.

## Installation
This application makes use of MongoDB, Mongoose, and Express.

To get started, fork the repo, clone it to your local environment, and run `npm i` to install the necessary packages. 

In addition to the npm packages above, it is also recommended to install nodemon as a dev dependency so that you don't have to restart your server each time you make a change, and to install MongoDB Compass to see changes to your database. You can also make use of [MongoDB Atlas](https://www.mongodb.com/atlas/database) to monitor your changes on a database in the cloud, however the walkthrough below utilizes Compass to monitor changes on a local database.

## Usage
To run the application, connect to a MongoDB deployment in Compass by connecting to the default MongoDB server (mongodb://localhost:27017/), type `npm run start` in the command line to spin up the server. Once it's up and running you'll be albe to use the API routes to perform CRUD operations within the database. I used Insomnia to test the API requests, which include performing CRUD operations for users, allowing users to add thoughts that are associated with the user, users to add and remove friends, and users to react to thoughts. 

You can view a walkthrough video of how to run the application at the link below: 

[https://drive.google.com/file/d/1GIrKlPpx9OMjLruQc90Le2LS1P8601Yk/view]

## License
Please refer to the LICENSE in the repo.
