const http = require('http')
const data = require('./data')

const server = http.createServer((request,response)=>{
    // console.log(response.url)
    if(request.url === '/'){
        response.write("hello world")
        response.end()
    }else if(request.url === '/json'){
        const json = JSON.stringify(data)
        response.write(json)
        response.end()
    }
})

server.listen(5000,()=>{
    console.log("server created successfull")
})