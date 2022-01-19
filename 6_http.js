const http = require('http');

let server = http.createServer((req,res)=>{
    if(req.url === '/me'){
        res.end(    `<h1>Oops !!...</h1>
            <a href = "/about">Back to Home</a>
        `)
        res.write("This is my home page ....");
    }
    else if(req.url === '/about'){
        res.write("This is About Page...")
    }
    else if(req.url === '/'){
        res.write("Bro yeh apna home page hai ...")
    }
    else{
        res.write("Error happenend...")
    }

})
const fs = require('fs')
server.listen(1000);