function display1(){
    var i=1,n=parseInt(n1.value);
    while(i<=n){
        if(n%i==0){
        prime(i);
    }
        i++;
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
        var input=document.createElement('input');
        input.setAttribute('style','width:30px;text-align:center')
        input.value=n;
        document.getElementById('display').appendChild(input);
    }
}
}