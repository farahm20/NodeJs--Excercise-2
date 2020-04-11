/*2.5: If you type in the url 'givemeecret' then the web server 
should return a random password to the client. This should then 
be validated against the web server by typing / 
password = YOUR PASSWORD and get a response from the web 
server if it is correct. (Note that you should never write 
passwords in the url this is only for practice :)).*/ 

/*2.3: Allows you to navigate the web page between different HTML pages.
  2.4: Add a 404 page if a user tries to access a URL that does not exist.*/

  const http = require('http'); //http is the module
  const fs = require('fs');
  const server = http.createServer();
  var password = 0;

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
      } else if (req.url === '/givemesecret'){
            password = Math.floor(Math.random() * 100);
            res.end(password.toString());
      } else if (req.url.indexOf('/password') !== -1){
          console.log(req.url.indexOf('/password'));
          const pass = req.url.split('=');
          console.log(pass[1]);

          if(parseInt(pass[1]) === password) {
              res.end('password correct: ' + pass[1]);
          }else {
              res.end('password not correct: ' +  pass[0]);
          }

      } else {
          const myReadStream = fs.createReadStream('404.html', 'utf8');
          myReadStream.pipe(res);
      }
  
  });
  
  server.listen(5000); //man kan ha flera websidan på en webserver
  console.log('you are listening to port');
  