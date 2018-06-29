angular.
 module('core.jewelry').
 factory('Jewelry', ['$resource',
  function($resource) {
   return $resource('jewelries/:jewelryId.json', {}, {
    query: {
     method: 'GET',
     params: {jewelryId: 'jewelries'},
     isArray: true
    }
   });
  }
 ]);
 