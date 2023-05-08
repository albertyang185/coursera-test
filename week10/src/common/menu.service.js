(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };

  service.getAll = function(){
    return $http.get(ApiPath + '/menu_items.json').then(function (response) {
      return response.data;
    });
  }

  service.getMenuItemByShortName = function(shortname){
    var promise = service.getAll();
    return promise.then(function(categories) {
      shortname = shortname.trim().toUpperCase();
      for (const category in categories) {
          for (const menu_item in categories[category].menu_items) {
            if(categories[category].menu_items[menu_item].short_name.toUpperCase() === shortname){

              var favorite_menu_item = categories[category].menu_items[menu_item];
              favorite_menu_item.category = category;
              return favorite_menu_item;
            }
          }
      }
      return false;
    }).catch(function(error) {
      return false;
    })

  }


  service.getMenuItems = function (category) {
    console.log(ApiPath + '/menu_items/' + category + '.json')
    return $http.get(ApiPath + '/menu_items/' + category + '.json').then(function (response) {
      return response.data;
    });
  };

}



})();
