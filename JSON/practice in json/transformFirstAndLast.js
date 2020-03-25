/*Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with:
1) the first element of the array as the object’s key, and
2) the last element of the array as that key’s value.
Input (Array):
var array = [“GUVI”, “I”, “am”, “Geek”];
Output:
var object = {
GUVI : “Geek”
}
*/
var array = ['GUVI', 'I', 'am', 'Geek'];
var object={};
transformFirstAndLast(array);
function transformFirstAndLast(array){
var length=array.length;
object[array[0]]=array[length-1];
}
console.log(object);
