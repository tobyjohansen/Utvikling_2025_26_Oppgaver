// Lage en http server

// 1. Importere moduler som trengs
const http = require('http');
const fs = require('fs');
const path = require('path');



// 2. Lage en funksjon som serverer filer
// Denne funksjonen tar filsti, innholdstype og responsobjekt som argumenter
// og leser filen fra filsystemet, deretter sender den filinnholdet som respons

function serveFile(filePath, contentType, response) {
    fs.readFile(path.join(__dirname, filePath), (err, data) => {
        if (err) {
            response.writeHead(500);
            response.end('Error loading file');
        } else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(data);
        }
    });
}

// 3. Lage server objektet
// Denne serveren håndterer innkommende forespørsler og bruker serveFile funksjonen


const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/index.html') {
        serveFile('public/index.html', 'text/html', res);
    } else if (req.url === '/style.css') {
        serveFile('public/style.css', 'text/css', res);
    } else if (req.url === '/script.js') {
        serveFile('public/script.js', 'application/javascript', res);
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
})

// 4. Starte serveren

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
