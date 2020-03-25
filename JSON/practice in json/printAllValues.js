/*Write a function called “printAllValues” which returns an newArray of all the input object’s values.
Input (Object):
var object = {name: 'RajiniKanth', age: 33, hasPets : false};
Output:
['RajiniKanth', 33, false]
*/
var object = {name: 'RajiniKanth', age: 33, hasPets : false};
function printAllValues(object){
  array=[];
  for(var i in object){
    array.push(object[i])
  }
};
printAllValues(object);
console.log(array);
