function display1(){
    var n2=parseInt(n1.value),p=2;
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
        var input=document.createElement('input');
        input.setAttribute('style','width:30px;text-align:center');
        input.value=i;
        document.getElementById('display').appendChild(input);
    }
}}