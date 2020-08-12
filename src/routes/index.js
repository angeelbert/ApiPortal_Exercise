//Archivo de rutas

const router = require('express').Router(); //Importa routes desde express

const helloRoute = require('./people');//Importar primera ruta

router.use('/people', helloRoute);//Nuestra primera ruta a traves de Hello

module.exports = router;