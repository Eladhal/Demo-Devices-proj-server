const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;

app.all('/*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

app.get('/device-groups', (req, res) => {
    fs.readFile('./groups.json', (err, json) => {
          const obj = JSON.parse(json);
          res.json(obj);
      });
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
});
