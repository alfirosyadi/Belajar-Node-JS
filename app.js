const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Server Starting');
});

server.listen(3000);