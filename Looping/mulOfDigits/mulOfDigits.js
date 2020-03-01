function display1(){
    var n=parseInt(n1.value),m=1;
    var f=n%10;
        while(n>=1){
            var t=n%10;
            var m=m*t;
            n=parseInt(n/10);
        }
       op.value=m;
    }