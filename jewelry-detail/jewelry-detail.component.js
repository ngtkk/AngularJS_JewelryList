angular.
  module('jewelryDetail').
  component('jewelryDetail', {
    templateUrl: 'jewelry-detail/jewelry-detail.template.html',
    controller: ['$routeParams', 'Jewelry',
      function JewelryDetailController($routeParams, Jewelry) {
          var self = this;  
          self.jewelry = Jewelry.get({jewelryId: $routeParams.jewelryId},
          function(jewelry){
           self.setImage(jewelry.images[0]);
          });
             
          self.setImage = function setImage(imageUrl){
              self.mainImageUrl = imageUrl;
          };
          }
        ]
 });
