const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("How old are you? ", function(age) {
    console.log("You entered: " + age);
    rl.close();
});
