// 🎇 path module is used to work irrespective of the machine, in both windows and mac os without any issue 

const path = require('path');  

// 1. 
console.log(path.sep)

// 2. join is used to make a path
let paths = path.join('./content/subfolder/test.txt');
let paths = path.join('./content/','subfolder','test.txt') // both the ways are same...  // join is used to join path
console.log(paths);

// 3. basename give the last file or directory name
let basename = path.basename(paths);
console.log(basename);

// 4. extension gives the name of the extension 
let extension = path.extname(path.join(__dirname , "/content","subfolder","test.txt"));
console.log(extension);

// 5. resolve is used to get the absolute path
const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute)

// practice
let name = path.basename(__dirname);
console.log(name);
