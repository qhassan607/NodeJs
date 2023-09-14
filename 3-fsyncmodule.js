const {readFileSync,writeFileSync} = require('fs')
const first = readFileSync('./GFather/first.txt','utf-8');
const second = readFileSync('./GFather/second.txt','utf-8');

console.log(first,second)
writeFileSync(
    './GFather/resultsync.txt',
    `The merged file contains:${first}, ${second}`,
    {flag:'a'}
)