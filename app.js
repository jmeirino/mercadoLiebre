const express = require('express');
const path = require('path');
const app = express();

console.log(__dirname);
app.use('/static', express.static(__dirname + '/public'));

const port = process.env.PORT || 3030;
app.listen(3030, ()=>{
    console.log('Servidor Corriendo');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});



