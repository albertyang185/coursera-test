(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController)

    LunchCheckController.$inject = ['$scope'];

    //function to convert string seperated by comma to array
    var strToArr = (inputStr, seperator = ",") => {
        if (!inputStr) {
            return [];
        }
        return inputStr.split(seperator);
    }

    var getCount = (inputArr) => {
        var noneEmptyCount = 0;
        inputArr.forEach(element => {
             if (/\S/.test(element)){
                noneEmptyCount +=1;
            }
        });
        return noneEmptyCount;
    }

    var countToMessage = (count) => {

        if (count < 1) {
            return 'Please enter data first';
        } else
        if (count <= 3) {
            return 'Enjoy!';
        } else {
            return 'Too much!';
        }
    }
    var countToColor = (count) => {
        if (count < 1) {
            return 'red';
        } else
        if (count <= 3) {
            return 'green';
        } else {
            return 'green';
        }
    }
    var colorWrapper = (color) => {
        return { 'color': color };
    }

    var boarderWrapper = (color) => {
        return {
            'border-style': 'solid',
            'border-color': color
        };
    }

    function LunchCheckController($scope) {
        $scope.lunches = '';
        $scope.boarderColor = {};
        $scope.messageColor = {};
        $scope.lunchCheck = () => {
            let lunchesArr = strToArr($scope.lunches);
            debugger;
            let count = getCount(lunchesArr);
            $scope.message = countToMessage(count);
            let color = countToColor(count);
            $scope.boarderColor = boarderWrapper(color);
            $scope.messageColor = colorWrapper(color);
        }

    }



})();