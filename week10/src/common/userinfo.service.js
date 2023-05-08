(function () {
"use strict";

angular.module('common')
.service('UserinfoService', UserinfoService);

function UserinfoService(){
  var service = this;

  service.getUserinfo = function () {
   return service.user;
  };

  service.setUserinfo = function (user) {
    service.user = user;
  };

}



})();
