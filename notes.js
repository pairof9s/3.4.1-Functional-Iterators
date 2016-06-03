/**
* Functional Iterators assignment
*/

// "forEach" functional iterator

var myCars = [['dodge', 'dakota'], ['honda', 'civis'],['peel', 'p50']];  // array literal syntax which designates the variable value will be an array

console.log(myCars.length);

function logMyCars(item){
  console.log('each item: ', item);
  console.log('My Cars: ', item[1]);
}

forEach(myCars, logMyCars);


var coffeeVendors = ['dunkin donuts', 'methodical', 'due south'];

coffeeVendors.forEach(function(vendorname){
    console.log('Good Coffee: ', vendorname);


});




/** The following function will be used in a callback called "forEach", thus preventing the need to rewrite the full function when it's required in the code */
function forEach(arrayToLoopOver, callback){
  for(var i=0; i<arrayToLoopOver.length; i++){
    callback(arrayToLoopOver[i], i, arrayToLoopOver);  // specifies each individual array value in order (+1), then state the total number of values in the array, and finally lists all the values in the array index. "callback" is a system function that pulls 3 elements from a value array: current value, index, all array values.
  }
}

// for(var i=0; i<myCars.length; i++){
//   //console.log(myCars[i]);
//   console.log('My Cars: ', myCars[i][0]);
//
//}


// "map" functional Iterator

var productPrices = [10.50, 12, 20];

function decreaseThePrice(retailPrice){
  return retailPrice * 0.9;
}

var salePrices = map(productPrices, decreaseThePrice);

console.log('Our sale prices', salePrices);



function map(arrayToLoopOver, callback){  // function provides the price discount for the called array
  var newArray = [];

  for(var i=0; i<arrayToLoopOver.length; i++){
    newArray.push(callback(arrayToLoopOver[i], i, arrayToLoopOver));  //"push" assigns the next iteration of the new variable's array index ("newArray=[]") to the following function.
  }

  return newArray;  // No value is currently returned since no values have been assigned to function
}



// "reduce" functional iterator

var totalPrice = reduce(productPrices, function(previousValue, retailPrice){
  if(previousValue === undefined){
    previousValue = 0;
  }
  return previousValue + retailPrice;
});

console.log(totalPrice);

function reduce(arrayToLoopOver, callback){  // function provides the reduction price for the called array values (note: must be integers for the function to work)
  var accumulator;

  for(var i=0; i<arrayToLoopOver.length; i++){
    callback(accumulator, arrayToLoopOver[i], i, arrayToLoopOver);
  }

  return accumulator;
}



// "objects" functional iterator

var coolCool = ['ice', 'snow'];

console.log(coolCool[1]);

var myCar = {   // e.g. - "myCar" is the object, "doors" is the property, "4" is the property value
  doors: 4,
  wheels: 4,
  windows: 6,
  color: 'red',
  goFast: function(){
    console.log('vrrooomm!');
  }
};

console.log(myCar['windows']); //returns the property value of "windows"
console.log(myCar.color);  // works the same; e.g. - the propery value of "color" is returned

myCar.goFast();  // property can be a function whose value is the execution of the function

console.log(myCar.hasOwnProperty('v6'));

myCar.v6 = 'yeah, real fast!';

console.log(myCar.hasOwnProperty('v6'));
