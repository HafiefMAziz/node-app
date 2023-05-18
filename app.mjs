import http from 'http';
import fs from 'fs';
// const http = require('http');

const port = 3000;

const renderHTML = (path, res) => {
    fs.readFile(path, (err, data) => {
        // jika error tampilkan hal 404
        if (err){
            res.writeHead(404);
        // jika berhasil
        } else {
            res.write(data);
        }
        res.end();
    })
}

// membuat server
http.createServer((req, res) => {
    // mengirimkan sebagai html
    res.writeHead(200, {
    'Content-Type': 'text/html',
  })
    const url = req.url;
    switch (url){
        case '/about' :
            renderHTML('./about.html', res);
            break;
        case '/contact':
            renderHTML('./contact.html', res);
            break;
        default :
            renderHTML('./index.html', res);
            break;
    }
}).listen(port, () => {
    console.log(`Server is listening on ${port}`);
});