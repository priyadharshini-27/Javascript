function display1(){
    var num=parseInt(n1.value),n=1;
    while(n<=num){
        perfect(n);
        n++;
    }
    function perfect(num){
        var s=0;
    for (i = 1; i <num; i++) {
        if (num % i == 0) {
           s+=i; //console.log(i);
        }
    }
    if(num==s){
        var input=document.createElement('input');
        input.setAttribute('style','width:30px;text-align:center');
        input.value=s;
        document.getElementById('display').appendChild(input);
    }
}
}