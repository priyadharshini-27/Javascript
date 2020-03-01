function display1(){
    var num=parseInt(n1.value),s=0;
    for (i = 1; i <num; i++) {
        if (num % i == 0) {
           s+=i; //console.log(i);
        }
    }
    if(num==s){
        op.value='Perfect Number';
    }
    else{
        op.value='not';
    }
}