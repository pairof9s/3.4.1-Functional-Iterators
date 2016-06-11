(function(){
  'use strict';

// items.forEach(function(item){
//     console.log('Product prices: ', item['price']);
//
// });

//** Challenge #1 - Get average price from the entire list of products

  var totalPrice = items.reduce(function(previousValue, currentValue, index, array) {
    if(previousValue === undefined){
      previousValue = 0;
    }
    //console.log(previousValue);
    {return(previousValue + currentValue.price);
    }
  }, 0);

  console.log('Average Price: ', totalPrice / items.length);


//** Challenge #2 - Find just products whose price is between $14-$18

  var priceRange = items.filter(function(title, index, array) {
    if(title.price >= 14 && title.price <= 18){
      return true;
    }
  });
    var priceTitles = priceRange.reduce(function(title, index, array) {
      return index.title;
    });

  console.log("Items that cost between $14.00-$18.00 USD: " + priceTitles);  // Cannot determine how to provides results which include multiple values. Should another function be made to set these values to a new array? I can place a square bracket ("[]") and say "0" to get the first value (product title), but of course that omits the remaining items and doesn't compensate for an unknown number of values.


//** Challenge #3 - Find items priced with "GBP" currency, then display product title & price

var poundProduct = items.filter(function(title, index, array) {
  if(title.currency_code === "GBP"){   // the "===" operator is used rather than "==" since it needs to be a strict equal rather than "true/false" equation.
    return true;
  }
});

var itemName = poundProduct.filter(function(item){
  return item.title;
});
var itemPrice = poundProduct.filter(function(item) {
  return item.price;
});
    console.log(itemName[0].title, ": cost -", itemPrice[0].price + "GBP");


//** Challenge #4 - Finds items made of wood material

var woodProduct = items.filter(function(title, index, array) {
    return title.materials.indexOf('wood') >=0;  // "indexOf" is method to search an array within an array; so in this sense, once we locate our target array ("materials"), we ask "indexOf" to then search within its array. ">=0" is to see if the value of the ...indexOf() is met; if not, a value of -1 is given thus it doesn't meet the requirement of ">=". That returns a value of false.

});
    console.log(woodProduct.length);


//** Challenge #5 - Find items made of 8 or more materials

var totalMaterials = items.filter(function(title, index, array){
    if(title.materials.length >=8){
    return true;
  }else {
    return false;
  }

});
    console.log(totalMaterials.length);


//** Challenge #6 - Find items made by their seller

var sellerMade = items.filter(function(title, index, array) {
  if(title.used_manufacturer === false ){
    return true;
  }
});

var itemSeller = sellerMade[0].title;

console.log("Items made by the seller: ", itemSeller);

}());








//** Function "reduce" shortcut code **//
function reduce(arrayToLoopOver, callback){  // function provides the reduction price for the called array values (note: must be integers for the function to work)
  var accumulator;
  for(var i=0; i<arrayToLoopOver.length; i++){
    callback(accumulator, arrayToLoopOver[i], i, arrayToLoopOver);
  }
  return accumulator;
}


//** Function "forEach" shortcut code **//
function forEach(arrayToLoopOver, callback){
  for(var i=0; i<arrayToLoopOver.length; i++){
    callback(arrayToLoopOver[i], i, arrayToLoopOver);
  }
}


//** Function "map" shortcut code **//
function map(arrayToLoopOver, callback){
  var newArray = [];
  for(var i=0; i<arrayToLoopOver.length; i++){
    newArray.push(callback(arrayToLoopOver[i], i, arrayToLoopOver));
  }
  return newArray;
}
