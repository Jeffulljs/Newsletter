// jshint esversion:6

// utilisation de npm express, body-parser, request.

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

// initialisation de express.

const app = express();

//initialisation de body-parser

app.use(bodyParser.urlencoded({extended: true}));


//permet de lire les fichiers css, images

app.use(express.static('public'));


//configuration des routes


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

    let data = {
        members:[
          {
            "email_address": "email",
            "status":"subscribed"
          }    
        ]
    };

    console.log(data);  
    

    let jsonData = JSON.stringify(data);
    console.log(jsonData);
    

    const option = {
        url:'https://us20.api.mailchimp.com/3.0/lists/afc5baef2f',
        method:'POST', 
        headers: {
            'Authorization': "jeffulljs aeed9438f5d02fda3ce2a7f6ab3450e5-us20"
        },
        body: jsonData
    };
    

   request(option, (error, response, body)=>{
       if (error){
        console.log(error);     
       } else{
        console.log(response.statusCode);      
       }
    });
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

//list id mailchimp qui va permettre d'identifier la liste d'abonner a ajouter ou supprimer
//c065340f63


//API KEY
// aeed9438f5d02fda3ce2a7f6ab3450e5-us20