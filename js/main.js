"use strict";

let   Handlebars = require('hbsfy/runtime'),
	carInventory = require('./Inventory.js'),
     carTemplate = require('../templates/cards.hbs');

console.log(Handlebars, carInventory, carTemplate);
carInventory.getInventory(
	populatePage, console.error);

function populatePage(data)
{
	var output = document.createElement("div");
	output.innerHTML = carTemplate(data);
	$("#inventory--wrapper").append(output);
}