//This is a Model for testing the MVC pattern.
var ModelExample = function(data) {
	this.myProperty = data.yourProperty;

	return this;
};

ModelExample.find = function(id) {
	var ourData = {
		'123': {
			yourProperty: 'Hello World'
		}
	};

	var model = new ModelExample(ourData[id]);

	return model;
}

//View
var ViewExample = function(model) {
	this.model = model;
	return this;
};

ViewExample.prototype.output = function() {
	var ourData = '<h1><%= myProperty %></h1>';
	var instance = this;
	return ourData.replace(/<%=\s+(.*?)\s+%>/g, function (m, m1) {
		return instance.model[m1];
	});
};

ViewExample.prototype.render = function() {
	console.dir(this.model);
	//document.getElementById('output').innerHTML = this.output();
};

//Controller
var ControllerExample = function() {
	return this;
};

ControllerExample.prototype.loadView = function(id) {
	var model = ModelExample.find(id);
	var view = new ViewExample(model);
	view.render();
};

function bootstrapper() {
	var controller = new ControllerExample;
	controller.loadView(123);
}

bootstrapper();