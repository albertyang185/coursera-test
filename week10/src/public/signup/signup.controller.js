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

      var promise = MenuService.getMenuItemByShortName(signup.user.menu_number);
      promise.then((favorite_menu_item)=>{
        console.log(JSON.stringify(favorite_menu_item));
        if( favorite_menu_item!== undefined && favorite_menu_item!== false ){
          signup.menu_number_valid = true;
          signup.user.favorite_menu_item = favorite_menu_item;
        }else{
          signup.menu_number_valid = false;
        }
      });
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
