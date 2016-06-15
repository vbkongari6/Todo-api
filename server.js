var express = require('express');
var bodyParser = require('body-parser'); //post

var app = express();
var PORT = process.env.PORT || 3000;
var todos = [];
var todoNextId = 1;

app.use(bodyParser.json()); // post

//post
app.get('/todos', function (req, res) {
	res.json(todos);
});

app.get('/todos/:id', function (req, res) {
	var todoId = parseInt(req.params.id, 10);
	var matchedTodo;
	
	todos.forEach( function (todo) {
		if (todo.id === todoId) {
			matchedTodo = todo;
		}
	});

	if (matchedTodo) {		
		res.json(matchedTodo);
	}
	else {
		res.status(404).send();
	}
});

// POST /todos
// post methods require body-parser
// npm install body-parser@1.13.3 --save
app.post('/todos', function (req, res) {
	var body = req.body;
	//console.log('description: ' + body.description);
	body.id = todoNextId;
	todoNextId++;
	
	todos.push(body);

	res.json(body);
});

app.listen(PORT, function () {
	console.log('Express listening to port ' + PORT + '!');
});