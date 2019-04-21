// jshint esversion:6

// utilisation de npm express, body-parser, request.

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

// initialisation de express.

const app = express();

//initialisation de body-parser

app.use(bodyParser.urlencoded({extended: true}));

//configuration des routes



app.

//initialisetion page inscription 
app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/inscription.html");
});



//initialisation page success
app.post('/success.html', (req, res)=>{

});


// initialisation page echec
app.post('/echec', (req, res)=>{
    
});



//serveur enregistrer sur localhost 3000.

app.listen(3000, ()=>{
    console.log('server started');
    
});

