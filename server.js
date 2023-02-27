//modules================================================
const express = require('express');
const path = require ('path');
const app = express();
//set our port
const port =3000;

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));


app.get('/' ,(req, res) => {res.sendFile(path.join(__dirname, 'views/index.html'))});
app.get('/surprise' ,(req, res) => {res.sendFile(path.join(__dirname, 'views/blog.html'))});


app.get('/frontPage' , function (req, res) {
res.send('This is routing for application developed using Node and Express..')});

app.listen(port , () => console.log('MEAN app listening on port ${port}! `'));

