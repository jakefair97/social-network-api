const connection = require('../config/connection');
const { User, Thought } = require('../models');
// const { getRandomName, getRandomApplications } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    await Thought.deleteMany({});
    await User.deleteMany({});

    const users = [];
    const thoughts = [{
        thoughtText: 'I think this is cool', username: 'Aaren'},
    ];

    const usernames = [
        'Aaren',
        'Aarez',
        'Aazaan',
        'Abaan',
    ];

    const emails = [
        'aaren@gmail.com',
        'aarez@gmail.com',
        'aazaan@gmail.com',
        'abaan@gmail.com',
    ]


    for (let i = 0; i < usernames.length; i++) {
        let username = usernames[i];
        let email = emails[i];
        users.push({
            username,
            email,

        });
    }

    await User.collection.insertMany(users);

    // loop through the saved thoughts, for each thought we need to generate a thought response and insert the thought responses
    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});
