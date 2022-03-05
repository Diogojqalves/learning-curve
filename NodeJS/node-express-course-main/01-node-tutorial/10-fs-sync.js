const { readFileSync, writeFileSync } = require('fs')
console.log('start')
// read files
const first = readFileSync('./content/first.txt', 'utf8') //two params
const second = readFileSync('./content/second.txt', 'utf8')

//create a new file or overwrite existing one
writeFileSync(
  './content/result-sync.txt', // file name
  `Here is the result : ${first}, ${second}`, //value we want to oass
  { flag: 'a' } // append 
)
console.log('done with this task')
console.log('starting the next one')
