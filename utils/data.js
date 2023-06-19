const usernames = [
    'Aaren',
    'Aarez',
    'Aazaan',
    'Abaan',
];

const emails = [
    'Aaren@gmail.com',
    'Aarez@gmail.com',
    'Aazaan@gmail.com',
    'Abaan@gmail.com',

]

const thoughts = [
    'I think this is cool',
    'OOP is bad',
    'FP is bad',
    'Regex is ok',
    'I like big bundles',
    'Why is node ok?',
    'Why is deno better?',
    'Who even wants to use Redux?'
]



const possibleReactions = [
    'Like',
    'Dislike',
    'Wow',
    'Love',
    'Meh'
]

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomName = () => `${getRandomArrItem(usernames)}`

module.exports = { getRandomName, }