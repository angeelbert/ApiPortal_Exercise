const express = require('express');

const cors = require('cors'); //Para realizar peticiones desde cualquier dominio

const path = require('path'); //Para encontrar la ruta de un html

const {json, urlencoded} = express; //Importar json y urlencoded desde express

const app = express(); //Ésta app será nuestro servidor que va a estar corriendo 

const port = process.env.PORT = 8080; //Puerto por donde va a exponerse la app

const cosrsOptions = {
	origin: '*',
	optionsSuccessStatus: 200
}

app.use(cors(cosrsOptions)); //Cualquier origen puede acceder a nuestro MS

