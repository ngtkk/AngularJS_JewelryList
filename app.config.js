// JavaScript Document
angular.
  module('jewelrycatApp').
		config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider){
				$locationProvider.hashPrefix('!');
				
				$routeProvider.
					when('/jewelries', {
						template: '<jewelry-list></jewelry-list>'
					}).
				when('/jewelries/:jewelryId', {
					template: '<jewelry-detail></jewelry-detail>'
				}).
				otherwise('/jewelries');
				}
				]);
