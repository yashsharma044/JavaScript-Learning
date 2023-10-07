//Variable are used to store data and follow CRUD operarion in it
// 3 main variable let const var
const accountId=1230;
// const value is not changed if once set
var accountEmail="abc@google.com";
// var is used in past time because it is not solving the issue of block and functional scope so we use let
let accountPassword=123;
//let is more preferable than var 
let accountCity;
//here no value is assign so it shows undefined
console.table([accountId,accountEmail,accountPassword,accountCity]);