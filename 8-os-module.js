const os=require('os');

//info about current user
const user=os.userInfo();
console.log(user);

//method returns system uptime(running time) in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

//info about user OS
const currentos={
    name:os.type(),
    release:os.release(),
    totalmemory:os.totalmem(),
    freememory:os.freemem()
};
console.log(currentos);