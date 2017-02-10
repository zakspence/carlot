"use strict";

//My inventory management API namespace
var Inventory = {

	getInventory ()
	{
		return new Promise(
		function(resolve, reject)
		{
			console.log('loading data');
			var loader = new XMLHttpRequest();
			loader.open("GET", "../inventory.json");

			loader.addEventListener("load",
			function()
			{
				console.log('data:', this.data);
				this.data = JSON.parse(this.responseText);
				console.log('data:',this.data);
				resolve(this.data);
			});

			loader.addEventListener("error",
			function()
			{
				alert("your data didn't get here.");
			});

			loader.send();
		});
	},
};

module.export = Inventory;