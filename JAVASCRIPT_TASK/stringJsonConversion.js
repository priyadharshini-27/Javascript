#string to json conversion
function json(string) {
    var operators = ['||', '&&'];
    var array = [];
    string = string.split(' ');
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

#json to string conversion
function string(json) {
    output = []
    json.forEach(element => {
        output.push(element.value)
    });
    return output.join(' ');
}
