(function(){
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
.filter('tripleDollorSign',tripleDollorSignFilter);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;
    toBuy.items = ShoppingListCheckOffService.getToBuyItems();

    toBuy.bought = function ( itemIndex ) {
        var item = ShoppingListCheckOffService.remove_ToBuyItems( itemIndex );
        ShoppingListCheckOffService.push_BoughtItems( item );
    };
        
    toBuy.isEmpty = function(){
        return isEmpty(toBuy.items);
    };

}



AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;
    
    bought.items = ShoppingListCheckOffService.getBoughtItems();

    bought.isEmpty = function(){
        return isEmpty(bought.items);
    };
}


function ShoppingListCheckOffService() {
    var service = this;

    // List of to buy items
    var toBuyItems = prePopulated(); 

    // List of to bought items
    var boughtItems = [];

    //exposed onto the ToBuyController
    service.getToBuyItems = function(){
        return toBuyItems;
    };

    //exposed onto the AlreadyBoughtController
    service.getBoughtItems = function(){
        return boughtItems;
    };
    
    //remove selected item from ToBuyItems array
    service.remove_ToBuyItems = function ( itemIndex ){
       return toBuyItems.splice(itemIndex, 1)[0];
    };

    //add an item to BoughtItems array
    service.push_BoughtItems = function ( item ){
        boughtItems.push( item );
    };


}

function tripleDollorSignFilter(){
    return function (input) {
        return "$$$" + input;
      }
}


//function to check if array is empty or undefined. 
function isEmpty(array)
{
    return !( !Array.isArray( array ) || array.length );
}

//function to create a shopping item object
function createItem( _name, _quantity, _pricePerItem )
{
    return {
            name : _name,
            quantity : _quantity,
            pricePerItem : _pricePerItem,
           };
}

//pre populate at least 5 shopping item objects
function prePopulated()
{
    var result = [];
        result.push( createItem( 'apples', 3, 0.99 ) );
        result.push( createItem( 'bananas', 10, 0.50 ) );
        result.push( createItem( 'oranges', 5, 0.75 ) );
        result.push( createItem( 'peaches', 8, 1.43 ) );
        result.push( createItem( 'melons', 2, 2.99 ) );
    return result;
}
})();