//  dates in js
let myDate=new Date();
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
let myCreatedDate=new Date("1-12-2023");
console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now();
console.log(Math.floor(myTimeStamp/1000));

let fdate=new Date();
console.log(fdate.getFullYear());