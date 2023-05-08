describe('MenuService getMenuItemByShortName', function () {

  var MenuService;
  var $httpBackend;
  var ApiPath;

  var testData = {
    "A": {
        "category": {
            "id": 82,
            "name": "Soup",
            "short_name": "A",
            "special_instructions": ""
        },
        "menu_items": [
            {
                "description": "chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions",
                "large_portion_name": "quart",
                "name": "Won Ton Soup with Chicken",
                "price_large": 5,
                "price_small": 2.55,
                "short_name": "A1",
                "small_portion_name": "pint"
            }
        ]
    }}

  beforeEach(function () {
    module('common');

    inject(function ($injector) {
      MenuService = $injector.get('MenuService');
      $httpBackend = $injector.get('$httpBackend');
      ApiPath = $injector.get('ApiPath');
    });
  });



  it('should return an object of menuItem', function() {
    $httpBackend.whenGET(ApiPath + '/menu_items.json').respond(testData);
    MenuService.getMenuItemByShortName('A1').then(function(response) {
      expect(response.short_name).toBe("A1");
    });
    $httpBackend.flush();
  });

});
