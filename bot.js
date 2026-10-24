const http = require('http');
http.createServer((req,res)=>res.end('Bot Live')).listen(process.env.PORT||10000)