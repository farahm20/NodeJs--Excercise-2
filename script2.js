/*2.3: Allows you to navigate the web page between different HTML pages.
  2.4: Add a 404 page if a user tries to access a URL that does not exist.*/

const http = require('http'); //http is the module
const fs = require('fs');
const server = http.createServer();

server.on('request', (req, res) => {
    console.log('request was made: ' + req.url);
    if(req.url === '/') {
        const myReadStream = fs.createReadStream('index.html', 'utf8');
        myReadStream.pipe(res);
    } else if(req.url === '/index') {
        const myReadStream = fs.createReadStream('index.html', 'utf8');
        myReadStream.pipe(res);
    } else if(req.url === '/style.css') {
        const myReadStream = fs.createReadStream('style.css', 'utf8');
        myReadStream.pipe(res);
    } else if (req.url === '/home') {
        const myReadStream = fs.createReadStream('home.html', 'utf8');
        myReadStream.pipe(res);
    } else {
        const myReadStream = fs.createReadStream('404.html', 'utf8');
        myReadStream.pipe(res);
    }

});

server.listen(5000); //man kan ha flera websidan på en webserver
console.log('you are listening to port');
