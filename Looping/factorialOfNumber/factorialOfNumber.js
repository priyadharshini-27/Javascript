function display1(){
    var n=parseInt(n1.value),f=1;
    if (n==0){
        op.value=n;
    }
    else if(n==1){
        op.value=n;
    }
    else if(n>1){
        for(i=1;i<=n;i++){
            var f=f*i;
        }
        op.value=f;
    }
}