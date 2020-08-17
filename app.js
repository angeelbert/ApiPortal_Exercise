var	express = require('express'),
	people = require('./src/routes/people.js'),
	bodyparser = require('body-parser');
var app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));


//Rutas
app.get('/',people.getAll);
app.get('/people/nationalId',people.getId);
app.post('/people',people.Add);
app.put('/people/nationalId',people.Edit);
app.delete('/people/nationalId',people.Delete);

app.listen(8080);
console.log('escuchando en el puerto 8080...');
