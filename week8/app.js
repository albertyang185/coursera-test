(function(){
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective)
  .constant('ApiBasePath', "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json");


  function FoundItemsDirective(){
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: '<',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'menu',
      bindToController: true
    };
  
    return ddo;
  }

  function FoundItemsDirectiveController() {
    var menu = this;
    menu.isEmpty = function() {
      if ( Array.isArray(menu.items)  &&  menu.items.length <1) {
        return true;
      }
      return false;
    };
  }


  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var menu = this;
    menu.found=null;
    menu.search = function (searchTerm) {
      var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
      promise.then(function (response) {
        menu.found = response;
 
      })
      .catch(function (error) {

      })
    };

    menu.removeItem = function(index) {
   
      menu.found.splice(index, 1);
    };

  }

  function isEmpty(str) {
    return (!str || str.trim().length === 0 );
  }

  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {

    return $http({
      method: "GET",
      url: (ApiBasePath)
    }).then(function (result){
      var foundItems = [];
      if( !isEmpty( searchTerm ) ){
        for (const property in result.data) {
          result.data[property].menu_items.forEach(item => {
            if(item.description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1){
              foundItems.push(item);
            
            }
          }); 
        }
      }
      return foundItems;
    }).catch(function (error) {

    });
  };



}

})();

