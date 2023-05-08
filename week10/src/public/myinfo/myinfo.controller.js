(function () {
"use strict";

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['MenuService', 'UserinfoService'];
function MyinfoController(MenuService, UserinfoService) {
  var myinfo = this;

  const check_registered = function() {
    myinfo.user =  UserinfoService.getUserinfo();
 
    if(myinfo.user != undefined && myinfo.user.favorite_menu_item != undefined){ 
      //console.log('check_registered passed'+JSON.stringify( myinfo.user));
      return true;
    }else{
      //console.log('check_registered false');
      return false;
    }
    
  }; 

  myinfo.is_registered = check_registered();

  
}




})();
