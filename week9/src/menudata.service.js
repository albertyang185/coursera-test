(function () {
    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService);


    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) {
        var service = this;

        /* `getAllCategories` - this method should return a promise which is a result of using the `$http` service, using the following REST API endpoint: [https://coursera-jhu-default-rtdb.firebaseio.com/categories.json)](https://coursera-jhu-default-rtdb.firebaseio.com/categories.json) */
        service.getAllCategories = function () {
            return $http({
                method: "GET",
                url: ('https://coursera-jhu-default-rtdb.firebaseio.com/categories.json')
            }).then(function (result) {
                //console.log(result.data);
         
                return result.data;
            }).catch(function (error) {
                console.log(error);
            });
        };

        /* `getItemsForCategory(categoryShortName)` - this method should return a promise which is a result of using the `$http` service, using the following REST API endpoint: https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/{categoryShortName}.json, where, before the call to the server, your code should append whatever `categoryShortName` value was passed in as an argument into the `getItemsForCategory` method.*/

        /* https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/a.json */
        service.getItemsForCategory = function (categoryShortName) {
            return $http({
                method: "GET",
                url: (`https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/${categoryShortName}.json`)
            }).then(function (result) {
                //console.log(result.data);
                return result.data;
            }).catch(function (error) {
                console.log(error);
            });
        };

    }







})();