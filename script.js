/*2.1: Build a web server that when you enter the web page 
(for example, localhost: 8000) returns and displays the text Stop, 
stop stop! You're going to take someone's eye out. Besides, you're 
saying it wrong. It's Levi-o-sa, not Levio-sar.*/

const http = require('http'); //http is the module
const server =  http.createServer(); //server object (event emitter) saved.

server.on('request', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Stop, stop stop! You're going to take someone's eye out. Besides, you're saying it wrong. It's Levi-o-sa, not Levio-sar.");
});

server.listen(8000);
console.log('you are listening to port');

