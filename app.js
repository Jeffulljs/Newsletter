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
    res.sendFile(__dirname + '/inscription.html');
});


app.post('/', (req,res)=>{

    let firstName = req.body.firstName;
    console.log(firstName);
    
    let name = req.body.name;
    console.log(name);
    
    let email = req.body.mail;
    console.log(email);

//Parametre demander par l'api mailchimp
    let data = {
        members:[
          {
            email_address: email,
            status:"subscribed",
            merge_fields:{
                FNAME:firstName,
                LNAME:name
            }   
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
            'Authorization': "jeffulljs c378f2676986c26efcdea80885d5708d-us20"
        },
        body: jsonData
    };
    
    //initialisation page success + echec.

   request(option, (error, response, body)=>{
       if (error){

        res.sendFile(__dirname + '/echec.html');  

       } else if(response.statusCode === 200){

        res.sendFile(__dirname + '/success.html'); 

       } else{

        res.sendFile(__dirname + '/echec.html');       
       }
       
    });
});

// redirection de la page echec en cas d'erreur

app.post('/echec', (req, res)=>{
    res.redirect('/');
});


//Port dynamique de Heroku.

app.listen(process.env.PORT || 3000, ()=>{
    console.log('server started');
    
});

//list id mailchimp qui va permettre d'identifier la liste d'abonner a ajouter ou supprimer
//c065340f63


//API KEY demo
// aeed9438f5d02fda3ce2a7f6ab3450e5-us20

//c378f2676986c26efcdea80885d5708d-us20