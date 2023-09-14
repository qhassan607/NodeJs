const http=require('http')
const server=http.createServer((req,res)=>{
    res.write('Hello welcome to our first App with node js')
    res.end()
})

server.listen(5000)