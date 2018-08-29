//simple Generic
function echo(data:any){
    return data;
}
console.log(echo("shubham"));
console.log(echo(21));
console.log(echo({name:"shubham",age:21}));

//better generic
function betterecho<t>(data:t){
    return data;

}
console.log(betterecho("shubham").length);
console.log(betterecho<number>(21));
console.log(betterecho({name:"shubham",age:21}));

//built-in Generics
const testresults: Array<number>=[1.99,2.66];
testresults.push(-1.99);
console.log(testresults);

//Arrays
function printAll<T>(args:T[]){
    args.forEach((element)   =>console.log(element));
}
printAll<string>(["Apple","mango"]);


//Generic Types
const echo2:<T>(data:T)=> T=betterecho;

console.log(echo2<string>("something"));

//Generic Class

class SimpleMath<T> {
    baseValue:T;
    multiplyValue:T;
    calculate():number{
        return +this.baseValue*+this.multiplyValue;
    }
}
const simpleMath = new SimpleMath();
simpleMath.baseValue=10;
simpleMath.multiplyValue=20;
console.log(simpleMath.calculate());