const name="yash"
const no=1324;
// New way to present and work with string is string interpolation
console.log(`Hello my name is ${name} and my number is ${no}`);
//adding placeholder and the use of backticks
const game= new String("iceCreame is better");
//in js string act as object not as array 
console.log(game.slice(1,4));
const newStr="      yashSharma"
console.log(newStr.trimStart());
const url="http://iskkdhhs/%30jdshhsdl";
// for removing the %20 from the url we use the method of replace
console.log(url.replace("%30","--"));
console.log(url)
//Change string to array
console.log(game.split(" "));

