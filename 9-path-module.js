const path = require('path')

console.log(path.sep)

const filepath = path.join('./content/','subfolder','test.txt')
console.log(filepath)

const basepath = path.basename(filepath)
console.log(basepath)
console.log(path.resolve(__dirname,'content','subfolder','test.txt'))