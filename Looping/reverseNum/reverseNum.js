function display1(){
    var n=parseInt(n1.value),arr=[];
    while(n>0){
        var t=n%10;
        arr.push(t);
        n=parseInt(n/10);
    }
       op.value=arr.join('');
    }