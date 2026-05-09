require('dotenv').config();
const http = require('http');

// Render proporciona automáticamente la variable PORT
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end('<h1>¡Despliegue Exitoso!</h1><p>El backend de Node.js está funcionando correctamente en Render.</p>');
});

server.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
