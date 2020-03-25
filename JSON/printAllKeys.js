/*Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.
Example Input:
var object = {name: 'RajiniKanth', age: 33, hasPets : false};
Output:
["name", "age", "hasPets"]
*/
var object = {name: 'RajiniKanth', age: 33, hasPets : false};
function printAllKeys(object){
  array=[];
  for(var i in object){
    array.push(i)
  }
};
printAllKeys(object);
console.log(array);
