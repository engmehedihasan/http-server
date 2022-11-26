const http= require('http');

const port = 3000;


const myServer = http.createServer((req,res)=>{
    res.end("<h1>Hello. I am your First Server<h1/>")
});

myServer.listen(port,()=>{
    console.log(`Server is Runnig at localhost ${port}`);
});