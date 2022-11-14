
const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//method return system uptime
console.log(` the system uptime is ${os.uptime()} seconds`)