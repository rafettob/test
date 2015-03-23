	//Some raw apartment data to start us off.

	var apartmentData = {
		'Brownstone': {
			bedrooms: 4,
			rent: 4500,
			pets: 'Ok',
			picture: 'brownstone.jpg'
		},
		'Closet': {
			bedrooms: 1,
			rent:1500,
			pets: 'Not allowed.',
			picture: 'closet.jpg'
		},
		'Modern': {
			bedrooms: 2,
			rent: 2700,
			pets: 'Cats and small dogs allowed.',
			picture: 'modern.jpg'
		}
	};

//This is a Model for testing the MVC pattern.
var _Model = function(data) {
	this.myProperty = data;
	return this;
};

_Model.find = function(id) {
	var model = new _Model(apartmentData[id]);
	return model;
}



//View
var _View = function(model) {
	this.model = model;
	return this;
};

_View.prototype.output = function() {
	var apartmentData = '<h1><%= myProperty %></h1>';
	var instance = this;
	return apartmentData.replace(/<%=\s+(.*?)\s+%>/g, function (m, m1) {
		return instance.model[m1];
	});
};

_View.prototype.render = function() {
	//console.dir(this.model);
	document.getElementById('rooms').innerHTML = "Rooms: " + this.model.myProperty.bedrooms;
	document.getElementById('rent').innerHTML = "Rent: " + this.model.myProperty.rent;
	document.getElementById('pets').innerHTML = "Pets: " + this.model.myProperty.pets;
	document.getElementById('picture').src = "./images/" + this.model.myProperty.picture;
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

var _Event = function (flag) {
	_Controller.loadView(flag);
}

function bootstrapper() {
	//alert(Object.keys(apartmentData['Brownstone']));
	//alert(document.getElementById('apartmentButton').options);
	var options = document.getElementById('apartmentButton').options;


	document.getElementById('apartmentButton').onchange = function() {
		var value = this.options[this.selectedIndex].innerHTML;
		_Event(value);
	}
}

bootstrapper();