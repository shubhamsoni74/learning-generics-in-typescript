"use strict";
//simple Generic
function echo(data) {
    return data;
}
console.log(echo("shubham"));
console.log(echo(21));
console.log(echo({ name: "shubham", age: 21 }));
//better generic
function betterecho(data) {
    return data;
}
console.log(betterecho("shubham").length);
console.log(betterecho(21));
console.log(betterecho({ name: "shubham", age: 21 }));
//built-in Generics
var testresults = [1.99, 2.66];
testresults.push(-1.99);
console.log(testresults);
//Arrays
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(["Apple", "mango"]);
//Generic Types
var echo2 = betterecho;
console.log(echo2("something"));
//Generic Class
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return this.baseValue * this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = 10;
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
