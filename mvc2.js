//This is a Model for testing the MVC pattern.
var _Model = function(data) {
	this.myProperty = data.yourProperty;
	return this;
};

_Model.find = function(id) {
	var ourData = {
		'123': {
			yourProperty: 'Hello World'
		},
		'456': {
			yourProperty: 'You pressed a key.'
		}
	};

	var model = new _Model(ourData[id]);
	return model;
}



//View
var _View = function(model) {
	this.model = model;
	return this;
};

_View.prototype.output = function() {
	var ourData = '<h1><%= myProperty %></h1>';
	var instance = this;
	return ourData.replace(/<%=\s+(.*?)\s+%>/g, function (m, m1) {
		return instance.model[m1];
	});
};

_View.prototype.render = function() {
	//console.dir(this.model);
	document.getElementById('output').innerHTML = this.output();
};



//Controller
var _Controller = function() {
	return this;
};

_Controller.loadView = function(id) {
	var model = _Model.find(id);
	var view = new _View(model);
	view.render();
};

var Event123 = 1 << 0;
var Event456 = 1 << 1;

var _Event = function (flag) {
	// if (flag & Event123) {
	// 	_Controller.loadView(123);
	// }
	// if (flag & Event456) {
	// 	_Controller.loadView(456);
	// }
	_Controller.loadView(flag);
}

function bootstrapper() {
	document.onclick = function() {
		_Event(123);
		};
	document.onkeydown = function() {
		_Event(456);
	};
}

bootstrapper();