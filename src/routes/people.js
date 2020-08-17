const router = require('express').Router(); //Importa routes desde express
var mongoose = require('mongoose');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin@cluster0.tu3rr.gcp.mongodb.net/peopledb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

var peopleSchema = {
  NationalID: String,
  Name: String,
  LastName: String,
  Age: Number,
  PictureURL: String
}

var people = mongoose.model('people', peopleSchema);
/*Hacer un get a la ruta /
exports.getAll('/').get((req, res)=>{
	people.find(function(error, people)){
    res.send(people);
  }
});*/

exports.getAll = function(req, res){
  people.find(function(error, people){
    res.send(people);
  });
}

exports.getId = function(req, res){
  people.findOne({"_id": req.params.nationalId}, function(error, people){
    res.send(people);
  });
}

exports.Add = function(req, res){
  var data = {
    NationalID: req.body.nationalId,
    Name: req.body.name,
    LastName: req.body.lastname,
    Age: req.body.age,
    PictureURL: req.body.picture //Build an object that conteins all the people elements 
  }

  var people = new people(data); //Instance the new model with the uper information

    people.save(function(error, result){
    if(error){
      res.send("Error 400.");
    }
    else{
      res.send(result[0]);
    }
  })
  }

  exports.Edit = function(req, res){
    var data = {
    NationalID: req.body.nationalId,
    Name: req.body.name,
    LastName: req.body.lastname,
    Age: req.body.age,
    PictureURL: req.body.picture //Build an object that conteins all the people elements 
  }

  people.update({"_id": req.params.nationalId}, function(error, people){
    res.send(data);
  })
  }

  exports.Delete = function(req, res){
    people.remove({"_id": req.params.nationalId}, function(error){
      if(error){
        console.log("Error 404.");
      }
      else{
        res.send("True");
      }
    });
  }
/*
exports.getId('/').get((req, res)=>{
  people.find(function(error, people)){
    res.send(people);
  }
});



router.route('/:lang').get((req, res) => {
    switch(req.params.lang){
      case "es": 
        msg="Hola Mundo!";
        break;
      case "en":
        msg="People World!";
        break;
      case "fr":
        msg="Bonjour Monde!";
        break;
      default:
        msg="Hallo Welt!";
    }
    res.json({msg});
  })

  router.route('/').post((req, res) => {
    msg = `People ${req.body.name || "World"} from get request!`;
    res.json({msg});
  })

module.exports = router;*/