function display1(){
    var num=parseInt(n1.value);
    for (i = 1; i <= num; i++) {
        if (num % i == 0) {
            var input=document.createElement('input');
            input.setAttribute('style','width:30px;text-align:center');
            input.value=i;
            document.getElementById('display').appendChild(input);
            //console.log(i);
        }
    }}