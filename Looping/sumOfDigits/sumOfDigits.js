function display1(){
    var n=parseInt(n1.value),s=0;
        while(n>0){
            var t=n%10;
            var s=s+t;
            n=parseInt(n/10);
        }
       op.value=s;
    }