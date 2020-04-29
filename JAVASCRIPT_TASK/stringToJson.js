/*
Input:some || and && others || not && can
Output:[
  { type: 'text', value: 'some' },
  { type: 'op', value: 'or' },
  { type: 'text', value: 'and' },
  { type: 'op', value: 'and' },
  { type: 'text', value: 'others' },
  { type: 'op', value: 'or' },
  { type: 'text', value: 'not' },
  { type: 'op', value: 'and' },
  { type: 'text', value: 'can' }
]
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(json(data))
});
function json(string) {
    var operators = ['||', '&&'];
    var array = [];
    string=string.split(' ');
    string.forEach(element => {
        dict = {};
        if (operators.includes(element)) {
            if (element == '||') {
                dict.type = 'op';
                dict.value = 'and';
                array.push(dict);
            }
            else {
                dict.type = 'op';
                dict.value = 'or';
                array.push(dict);
            }
        }
        else {
            dict.type = 'text';
            dict.value = element;
            array.push(dict);
        }
    });
    return array;
}
