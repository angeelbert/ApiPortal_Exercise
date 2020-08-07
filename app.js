const express = require('express');

const cors = require('cors'); //Para realizar peticiones desde cualquier dominio

const path = require('path'); //Para encontrar la ruta de un html

const router = require('./src/routes');

const {json, urlencoded} = express; //Importar json y urlencoded desde express

const app = express(); //Ésta app será nuestro servidor que va a estar corriendo 

const port = process.env.PORT || 8080; //Puerto por donde va a exponerse la app

const cosrsOptions = {
	origin: '*',
	optionsSuccessStatus: 200
}

app.use(cors(cosrsOptions)); //Cualquier origen puede acceder a nuestro MS

app.use(router);

app.use('/',(req, res) => {
	res.send('This is the microservice 1 and version 1.0.0') //Primer path
})

app.listen(port, () => { 
	console.log(`Server listening on port ${port}`); //Hacer que la aplicación escuche por el puerto configurad en la linea 11
})