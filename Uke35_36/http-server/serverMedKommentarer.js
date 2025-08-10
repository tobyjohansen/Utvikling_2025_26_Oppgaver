// her importerer vi de nødvendige modulene

// Her importerer vi http modulen for å lage en HTTP-server
const http = require('http');

// Her importerer vi fs modulen for å lese filer fra filsystemet
const fs = require('fs');

// Her importerer vi path modulen for å håndtere filstier
const path = require('path');


// Her lager vi en HTTP-server som håndterer innkommende forespørsler
// Serveren tar imot en forespørsel (req) og sender et svar (res)
// Den sjekker hvilken URL som er forespurt og serverer riktig fil
const server = http.createServer((req, res) => {
    // Hvis forespørselen er for rot eller index.html
    // Kaller vi serveFile funksjonen for å sende index.html filen
    if (req.url === '/' || req.url === '/index.html') {
        serveFile(res, 'public/index.html', 'text/html');
    // Hvis forespørselen er for style.css
    // Kaller vi serveFile funksjonen for å sende style.css filen
    } else if (req.url === '/style.css') {
        serveFile(res, 'public/style.css', 'text/css');
    // Hvis forespørselen er for noe annet
    // Sender vi en 404 Not Found respons
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});


// Denne funksjonen leser en fil og sender den som respons
// Den tar inn responsobjektet, filstien og innholdstypen som parametere
function serveFile(res, filePath, contentType) {
    // Her leser vi filen fra den gitte filstien
    // Vi bruker path.join for å sikre at vi får riktig filsti uavhengig av plattform
    // Når filen er lest kjøres en funksjon som tar imot en feil (err) og data
    fs.readFile(path.join(__dirname, filePath), (err, data) => {
        // Hvis det oppstår en feil under lesing av filen
        // Sender vi en 500 feilmelding
        if (err) {
            res.writeHead(500);
            res.end('Server Error');
        // Hvis filen ble lest uten feil
        // Sender vi en 200 OK respons med riktig innholdstype
        // Og sender filen (data) som respons
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
}

// Her starter vi serveren og lytter på port 3000
// Når serveren er klar, skriver vi en melding til konsollen
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});