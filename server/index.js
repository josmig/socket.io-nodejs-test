const express = require('express');
const app= express();

//esta variable se le pasa a socket
const server = require('http').Server(app);

const io =  require('socket.io')(server);

server.listen(8080, ()=> console.log('El servidor esta funcionando en http://localhost:8080'));

//middleware
app.use(express.static('client'));
//rutas
app.get('/hola-mundo', (req,res) =>{
    res.status(200).send('Hola mundo desde una ruta');
})

//Socket
io.on('connection',(socket)=> console.log('EL nodo con IP' + socket.handshake.address +
' se ha conectado...'));