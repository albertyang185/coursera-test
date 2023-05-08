(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService', 'UserinfoService'];
function SignupController(MenuService, UserinfoService) {
  var signup = this;
  signup.completed = false;
  signup.menu_number_valid = false; 
  signup.is_valid = function(){
    if(signup.user!=undefined && signup.user.menu_number){
      var promise = MenuService.getAll();
       promise.then(function(categories) {
        var menu_number = signup.user.menu_number.trim();
        menu_number= menu_number.toUpperCase();
        for (const category in categories) {
            for (const menu_item in categories[category].menu_items) {
              if(categories[category].menu_items[menu_item].short_name.toUpperCase() === menu_number){
                signup.menu_number_valid = true;
                signup.user.favorite_menu_item = categories[category].menu_items[menu_item];
                signup.user.favorite_menu_item.category = category;

                console.log(JSON.stringify(signup.user));

                return;
              }
            }
        }
        signup.menu_number_valid = false; 
      }).catch(function(error) {
        signup.menu_number_valid = false;
      })

    }
   
  }

  signup.submit = function() {
    if(signup.user!=undefined && signup.menu_number_valid === true ){
      UserinfoService.setUserinfo(signup.user);
      signup.completed = true;
    }
  };
}
})();
