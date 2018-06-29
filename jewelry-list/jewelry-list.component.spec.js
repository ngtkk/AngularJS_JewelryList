'use strict';

describe('jewelryList', function() {

  // Load the module that contains the `jewelryList` component before each test
  beforeEach(module('jewelrycatApp'));

  // Test the controller
  describe('JewelryListController', function() {

    it('should create a `jewelries` model with 3 jewelries', inject(function($componentController) {
      var ctrl = $componentController('jewelryList');

      expect(ctrl.jewelries.length).toBe(3);
    }));

  });

});
