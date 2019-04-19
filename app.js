// jshint esversion:6

// utilisation de npm express, body-parser, request.

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

// initialisation de express.

const app = express();

//initialisation de body-parser

app.use(bodyParser.urlencoded({extended: true}));



//serveur enregistrer sur localhost 3000.

app.listen(3000, ()=>{
    console.log('server started');
    
});