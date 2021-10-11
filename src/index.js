// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

app.get('/', (req, res) => {
  // res.send('<h1>Hello World</h1>');
  res.sendFile(__dirname + '/index.html');
});

server.listen(3000, () => {
  console.log('Listening on *:3000');
})

io.on("connection", (socket) =>  {
  console.log('A user has connected');

  socket.on('disconnect', () => {
    console.log('A user has disconnected');
  })

  socket.on('chat message', (msg) => {
      console.log('message: ' + msg);

      io.emit('chat message', msg);
  });
});

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
