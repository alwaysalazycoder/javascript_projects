// fs is the module for the FileSystem

let fs = require("fs");


// 🎇 for files ==========================================================================================================================================

// 1. reading a file
let buffer = fs.readFileSync("1_intro.js");
console.log("binary data " , buffer);
console.log("bin data " + buffer); //  for the output to be string format  we concatinate

// 2. opening a file

fs.openSync("delete.txt","w") // w shows it will open in writing format it will create file if it is not present 

// 3. adding content or writing in file
fs.writeFileSync("delete.txt", " mazza aagya file mai likh ke to");

// 4. updating a file or appending something
fs.appendFileSync("delete.txt" , " mazza to aana hi tha bro,,,,...");

// 5. deleting a file
fs.unlinkSync("delete.txt");

//==========================================================================================================================================================


// 🎇 for directory

// 1. creating a directory
fs.mkdirSync("directory");

// 2. reading from directory 
let content = fs.readdirSync("directory");
console.log(content);
for(let i = 0; i < content.length; i++){
    fs.unlinkSync("directory/" + content[i])
} 

// 3. deleting a directory 
fs.rmdirSync("directory")


// ===========================================================================================================================================================

//🎇 Some additional methods

let exist = fs.existsSync("2_os.js"); // if the file exists or not
console.log(exist);

let filefol = fs.lstatSync("2_os.js"); // if the path is of file or folder and lstat gives and object over which we use the method isFile() and isDirectory()...
console.log(filefol.isDirectory());