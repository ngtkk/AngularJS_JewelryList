angular.
  module('jewelryList').
  component('jewelryList', {
			templateUrl: 'jewelry-list/jewelry-list.template.html',
				controller: ['Jewelry',
				function JewelryListController(Jewelry) {
				this.jewelries = Jewelry.query();
				this.orderProp = 'age';
				}
				]
				});
				