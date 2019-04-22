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

app.use(express.static('public'));

//initialisetion page inscription 
app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/inscription.html");
});


app.post('/', (req,res)=>{

    let firstName = req.body.firstName;
    console.log(firstName);
    
    let name = req.body.name;
    console.log(name);
    
    let mail = req.body.mail;
    console.log(mail);

       
   // request(option, (err, res, body)=>{
     //  res.send();
   // });
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

//aeed9438f5d02fda3ce2a7f6ab3450e5-us20