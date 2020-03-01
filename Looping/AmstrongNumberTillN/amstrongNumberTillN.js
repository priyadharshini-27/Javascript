function display1(){
    var n=parseInt(n1.value),c=1;
    while(c<=n){
        amstrong(c);
        c++;
    }
    function amstrong(n){
    var temp=n,s=0;
    while(n!=0){
        var t=n%10;
        s+=t**3;
        n=parseInt(n/10);
    }
    if(temp==s){
        var input=document.createElement('input');
        input.setAttribute('style','width:30px;text-align:center')
        input.value=temp;
        document.getElementById('display').appendChild(input);
    }
}}