/*Write a function “fromListToObject” which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.
Input (Array):
var array = [[“make”, “Ford”], [“model”, “Mustang”], [“year”, 1964]];
Output:
var object = {
make : “Ford”
model : “Mustang”,
year : 1964
}
*/
var obj=[["make", "Ford"], ["model", "Mustang"], ["year", 1964]]
var obj1= Object.fromEntries(obj);
console.log(obj1);
