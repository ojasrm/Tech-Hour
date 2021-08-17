//Function
function increment1(i){
    return i++;
}
//function Expression
var increment2 = function(i){
    return i++;
}

console.log(increment1(2));
console.log(increment2(2));



// Creating Function Expression by assigning to a variable.
var myFunc = function() { return "Hello World"; };

// Creating Function Expression Using Logical Not.
!function() { return "Hello World"; };

// Creating Function Expression Using Parentheses.
(function() { return "Hello World"; });



// Regular Function.
function Greet()
{
	console.log("Welcome to World!");
};
// Execution of Regular Function.
Greet();

// IIFE creation and execution.
(function() { console.log("Welcome to World!"); })();



//Use Cases1
(function () {
    // some initiation code
    let firstVariable;
    let secondVariable;
  })();
  
  // firstVariable and secondVariable will be discarded after the function is executed.
  console.log(firstVariable)
  console.log(secondVariable)


//Use Cases2
const makeWithdraw = balance => (function(copyBalance) {
    let balance = copyBalance; // This variable is private
    let doBadThings = function() {
      console.log("I will do bad things with your money");
    };
    doBadThings();
    return {
      withdraw: function(amount) {
        if (balance >= amount) {
          balance -= amount;
          return balance;
        } else {
          return "Insufficient money";
        }
      },
    }
  })(balance);
  
const firstAccount = makeWithdraw(100); // "I will do bad things with your money"
console.log(firstAccount.balance); // undefined
console.log(firstAccount.withdraw(20)); // 80
console.log(firstAccount.withdraw(30)); // 50
console.log(firstAccount.doBadThings); // undefined, this method is private



//Important points
//1
function myFunc()
{
	console.log("Welcome to");
	// This will be executed after executing the previous log.
	(function() { console.log("World!"); })();
	console.log("Hi There!");
}

// Calling the Function.
myFunc();


//2
let firstVariable = "xyz";
(function () {
    // some initiation code
    let firstVariable = "abc";
    let secondVariable = 45;
  })();
  
  // firstVariable and secondVariable will be discarded after the function is executed.
  console.log(firstVariable)
  console.log(secondVariable)



//4
// Declaring the parameter required.
(function(dt) {
	console.log(dt.toLocaleTimeString());
	// Passing the Parameter.
})(new Date());

//5
console.log(notHoisted) // undefined
//  even though the variable name is hoisted, the definition isn't. so it's undefined.
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function() {
   console.log('bar');
};


