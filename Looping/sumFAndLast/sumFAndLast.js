function display1(){
    var n=parseInt(n1.value);
    var f=n%10;
        while(n>=1){
            var t=n%10;
            n=parseInt(n/10);
        }
       op.value=f+t;
    }