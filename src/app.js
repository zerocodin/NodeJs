const http = require('http')

const app = http.createServer((req,res)=>{
    console.log(req.url, req.method, req.headers);
    
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Learing phase</title></head>')
    res.write('<body><h1>Hello World</h1></body>')
    res.write('</html>')

    res.end("done");
})

module.exports = app