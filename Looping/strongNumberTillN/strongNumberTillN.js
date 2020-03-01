function display1(){
    var n=parseInt(n1.value),c=1;
    while(c<=n){
        check(c);
        c++;
    }
}
function check(n){
    var temp=n,s=0;
    while(n!=0){
        var l=n%10;
        var s=factorial(l)+s;
        n=parseInt(n/10);
    }
    if(temp==s){
        var input=document.createElement('input');
        input.setAttribute('style','width:30px;text-align:center')
        input.value=temp;
        document.getElementById('display').appendChild(input);
    }
}
function factorial(n){
    var f=1;
    if (n==0){
        return n;
    }
    else if(n==1){
        return n;
    }
    else if(n>1){
        for(i=1;i<=n;i++){
            var f=f*i;
        }
        return f;
    }
}