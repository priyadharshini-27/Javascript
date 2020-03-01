function display1(){
    var n2=parseInt(n1.value),p=2,s=0;
    while(p<=n2){
        prime(p);
        p++;
    }
    function prime(n){
        var i=2,c=0;
        while(i<n){
            if(n%i==0){
                c++;
            }
        i++;
        }
        if(c==0){
            s=s+i
    }
}   op.value=s;
}