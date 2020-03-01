function display1(){
    var n=parseInt(n1.value);
    op.value=n%10;
        while(n>=1){
            var t=n%10;
            n=parseInt(n/10);
        }
       
       op1.value=t;
    }