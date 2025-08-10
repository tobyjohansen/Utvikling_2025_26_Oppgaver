const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/index.html') {
        serveFile(res, 'public/index.html', 'text/html');
    } else if (req.url === '/style.css') {
        serveFile(res, 'public/style.css', 'text/css');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});


function serveFile(res, filePath, contentType) {
    fs.readFile(path.join(__dirname, filePath), (err, data) => {
        if (err) {
            res.writeHead(500);
            res.end('Server Error');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
}

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});