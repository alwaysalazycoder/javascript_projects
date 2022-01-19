// OS is the operating system internal module of the node js which give us the information about the operating system and features related to the os 

let os = require('os');

// for the user information of the current user
const info = os.userInfo();
console.log(info);

// for architecture
console.log(os.arch())

// for platform
console.log(os.platform())

// for network interfaces
console.log(os.networkInterfaces())

// for system uptime in seconds
const uptime = os.uptime();
console.log(uptime);

//cpus is used to get information about the cpu core of the computer and IP address
console.log(os.cpus());

// basic os details 
const currentOS = {
    name: os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}
console.log(
    currentOS
);
console.log(os.cpus());
