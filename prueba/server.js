var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("Hola Clase de domotica");
});

var server = app.listen(8081, function(){
	var host = server.address().address
	var port = server.address().port

	console.log("Ejemplo de aplicacion escuchando en http://%s:%s", host, port);
});