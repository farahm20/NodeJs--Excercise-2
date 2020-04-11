/*2.2: Now change so that instead of the above text, 
an HTML file is returned instead when you enter the web page.
/*2.2: Now change so that instead of the above text, 
an HTML file is returned instead when you enter the web page.*/

/*!! Problem: Since the style sheet is included in html shouldnt it load its self
I can only see half of teh styling. Cannot see teh background color. 
If i add style directly in the index file then I can see all teh styling
*/
const http = require('http'); //http is the module
const fs = require('fs');
const server = http.createServer();

server.on('request', (req, res) => {
    console.log('request was made: ' + req.url);
//    res.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream('index.html', 'utf8');
//    var myStyleRead = fs.createReadStream('style.css', 'utf8');

/** if i add readstream style sheet then I can see all the styling 
 * but only if i refresh twice. 
 */
    myReadStream.pipe(res);
//     myStyleRead.pipe(res);
});

server.listen(5500); //man kan ha flera websidan på en webserver
console.log('you are listening to port');
