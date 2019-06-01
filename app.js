var express = require('express');
var app = express();
var WebSocket = require('ws')

require('dotenv').config();
var prot = process.env.PROT
var addr = process.env.ADDR
var port = process.env.PORT



ws = new WebSocket (prot + '://' + addr + ':' +port,{
    headers : {
        token: process.env.TOKEN
    }
});

ws.onopen =  () => {
  console.log('websocket is connected ...')
  ws.send('connected')
}

ws.onerror = (error) => {
  console.log(error)
}

ws.onmessage = (e) => {
  console.log(e.data)
}


app.get('/', function (req, res) {
  res.send('Simple websocket client.');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});