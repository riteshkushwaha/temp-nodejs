const {readFileSync,writeFileSync} = require('fs');
// OR
//const fs = require('fs');
//fs.readFileSync
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const secOne = readFileSync('./content/second.txt', 'utf8')

//console.log(first,secOne)
writeFileSync(
    './content/result-sync.txt',
    `Here is the result ${first},${secOne}`,
    {flag:'a'}
    )
console.log('done with this task')
console.log('starting the next one')