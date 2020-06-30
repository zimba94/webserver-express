const http = require('http');
//aqui entra cualquier url
http.createServer((req, resp) => {
        resp.write('Hola Simba!');
        resp.end();
    })
    .listen(8080);

console.log("Escuchando el puerto 8080");