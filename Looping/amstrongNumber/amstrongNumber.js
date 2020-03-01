function display1(){
    var n=parseInt(n1.value),temp=n,s=0;
    while(n!=0){
        var t=n%10;
        s+=t**3;
        n=parseInt(n/10);
    }
    if(temp==s){
        op.value="Amstrong Number";
    }
    else{
        op.value="Not";
    }
}