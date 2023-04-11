const http  = require('http');
const server = http.createServer((req,res) =>{
      if(req.url === '/'){
            res.end("Welcome to my home page!!")
      }
      if (req.url === '/about'){
            res.end("here is my short story")
      }
      res.end(`
      <p>Page not found</p>
      <a href="/">Go Back</a>
      `)
})

server.listen(5000,()=>{
      console.log("app is listening on...");
})