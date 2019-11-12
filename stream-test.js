const fs = require('fs');

const http = require('http');
const hostname = '127.0.0.1';
const port = '3000';
var server = http.createServer();
var stream = require('stream');
var dest = process.stdout;
var src = fs.createReadStream('src.txt', 'utf8');


function read_file(){
  setInterval(function(){
    src = fs.createReadStream('src.txt', 'utf8');
    src.on("data", (chunk) => {
        dest.write(chunk);
    });
  }, 5000);
};

server.listen(port, hostname, () => {
  console.log("having been waked up....");

  read_file();

  console.log("waiting..........");
});
