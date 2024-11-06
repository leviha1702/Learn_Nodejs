const express = require('express');
const path = require('path');

const app = express();
const port = 8081;

app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');

app.set('/',(req,res)=>{
    req.send("Hello World");
});
app.get('/levietha', (req,res)=>{
    res.render('sample.ejs');
});
app.listen(port,() =>{
    console.log(`Example app listening on port ${port}`);
});