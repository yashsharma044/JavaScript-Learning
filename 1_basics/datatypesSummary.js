//DataTypes in JavaScript
//Primitive (pass by value type)
// Number Boolean string null undefined bigInt Symbol
const score=102
const anotherScore=1023.45
//int and float lies in the same category 
const isLogged=true;
const outSideTemp=null;
let userEmail;
//above one is undefined
//Representation of Symbol
const id=Symbol("123");//uniqueness is main feature
const anotherID=Symbol("123");
//Now if we check wheather the value in both above is same it is false
if(id!=anotherID)
console.log(true);
const bigNumber=3456465366478372999495004;
console.log(bigNumber);
//Non Primitive(Pass by Reference or Referenced type)
//Array object Functions
//Array Representation
const heros=["Shaktiman","Naagraj","Bheem"];
//object ==>It is a collection of properties which containes of key and value pair
let rishab={
    name:"rishab pant",
    age:25,
}
console.log(rishab);
//variable function in js
const myfunction=function()
{
    console.log("Hello");
}
myfunction();
//TypeOf value of all the datatypes
/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object */


// ################################ Stack and heap Memory in js##########################
// all the primitive datatype store in stack memory only the copy is pass init
//All the non primitive datatype store in heap memory reference of the real address pass in it
let myname="yash";
let anotherName="Aman";
anotherName="shiv";
console.log(anotherName);//value change because it is in stack memory only the value is pass init
console.log(myname);
//Now in the non primitive datatype
let myPhone={
    id:"mkjjue28",
    imo:9908
};
let Olonr=myPhone;
Olonr.id="ikkjfiide";
console.log(Olonr);
console.log(myPhone);
//here changes affect on the real object because it is a referenced typ-e

