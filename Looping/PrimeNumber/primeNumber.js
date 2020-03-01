function display1(){
    var n=parseInt(n1.value),i=2,c=0;
    while(i<n){
        if(n%i==0){
            c++;
        }
        i++;
    }
    if(c==0){
        op.value='Prime Number';
    }
    else{
        op.value='not';
    }
}