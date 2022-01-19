let cp = require('child_process'); // child process is a node module used for accessing the applicarion using command line instructions...


cp.execSync('calc');  // exec sync is used to open any application

cp.execSync("start chrome ","https://www.google.com" );
cp.execSync("code")
let output = cp.execSync("node 1_intro.js")  // it can also run a js file
console.log(output + " output ");

