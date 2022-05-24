const http = require('http');
const path = require('path');
const fs = require('fs');
const server = http.createServer((req, res)=>{
 if (req.url === '/api/users') {
fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content)=>{
    if (err) throw err;
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end('<h1>home</h1>');
})   
 }
});
const PORT = proccess.env.PORT || 5000;
server.listen(PORT, () => console.log('server running on port'+PORT));
