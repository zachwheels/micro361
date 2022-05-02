const express = require('express');
const { json } = require('express/lib/response');
const app = express();
const port = 3000;


  app.get('/', (req, res) => {
    min = Math.ceil(8);
    max = Math.floor(30);
    myNum = Math.floor(Math.random() * (max - min + 1) + min);
  
    res.send(`${myNum}`)
}) 


app.listen(port, () => console.log(`Example app listening on port ${port}!`))