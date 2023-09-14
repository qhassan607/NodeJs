const path=require('path')

const pathName=path.join('/GFather','/Father','son.txt')
console.log(pathName)

const baseName=path.basename(pathName)
console.log(baseName);

const absolute = path.resolve(__dirname,'GFather','Father','son.txt')
console.log(absolute)