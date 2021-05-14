const franc = require('franc');
const langs = require('langs');
const colors = require('colors');

const input = process.argv[2];
const code = franc(input);
console.log(code);

if (code === 'und') {
    console.log("Sorry, we couldn't figure it out".red)
} else {
    const langDect = langs.where("3", code);
    console.log(`You are speaking ${langDect.name}`.green);
}
