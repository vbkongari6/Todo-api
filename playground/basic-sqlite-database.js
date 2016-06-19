var Sequelize = require('sequelize');
var sequelize = new Sequelize(undefined, undefined, undefined, { 
	'dialect': 'sqlite', 
	'storage': __dirname + '/basic-sqlite-database.sqlite'
});

var Todo = sequelize.define('todo', {
	description: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			len: [1, 250]
		}
	},
	completed: {
		type: Sequelize.BOOLEAN,
		allowNull: false,
		defaultValue: false
	}
});

var User = sequelize.define('user', {
	email: Sequelize.STRING
	// or
	/*email: {
		type: sequelize.STRING
	}*/
});
/*sequelize.sync({force:true}).then( function () {
	console.log('Everyting is synced');
	Todo.create({
		description: 'Take out trash'
	}).then(function (todo) {
		return Todo.create({
			description: 'clean office'
		});
	}).then(function () {
		// return Todo.findById(1)
		return Todo.findAll({
			where: {
				description: {
					$like: '%Office%'
				}
			}
		});
	}).then(function (todos) {
		if (todos) {
			todos.forEach( function (todo) {
				console.log(todo.toJSON());
			});			
		}
		else {
			console.log('no todo found');
		}		
	})
	.catch( function (e) {
		console.log(e);
	});
});*/



/*sequelize.sync().then( function () {
	console.log('Everyting is synced');
	return Todo.findById(2);
	}).then( function (todo) {
		if (todo) {
			console.log(todo.toJSON());
		}	
		else {
			console.log('no todo found');
		}		
	})
	.catch( function (e) {
		console.log(e);
});*/
// or
/*sequelize.sync().then( function () {
	console.log('Everyting is synced');
	Todo.findById(2).then( function (todo) {
		if (todo) {
			console.log(todo.toJSON());
		}	
		else {
			console.log('Todo not found');
		}		
	});
});*/

Todo.belongsTo(User);
User.hasMany(Todo);

sequelize.sync(/*{force: true}*/).then( function () {
	console.log('Everyting is synced');

	/*User.create({
		email: 'vijay@gmail.com'
	}).then(function () {
		return Todo.create({
			description: 'clean car'
		});
	}).then(function (todo) {
		User.findById(1).then(function (user) {
			user.addTodo(todo);
		});
	});*/

	User.findById(1).then( function (user) {
		user.getTodos({
			where: {completed: false}
		}).then( function (todos) {
			todos.forEach( function (todo) {
				console.log(todo.toJSON());
			});
		});
	});
	
});