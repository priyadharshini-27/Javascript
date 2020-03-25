/*Write a function called “convertObjectToList” which converts an object literal into an array of arrays.
Input (Object):
var object = {name: “ISRO”, age: 35, role: “Scientist”};
Output:
[[“name”, “ISRO”], [“age”, 35], [“role”, “Scientist”]]
*/
var object = {name: 'ISRO', age: 35, hasPets:'Scientist'};
function printAllKeys(object){
  array_new=[];
  for(var i in object){
    array_new.push([i,object[i]]);
  }
};
printAllKeys(object);
console.log(array_new);
