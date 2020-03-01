function display1(){
    var n=parseInt(n1.value),arr=[];
    var r=n;
        while(n>0){
            var t=n%10;
            arr.push(t);
            n=parseInt(n/10);
        }
       if (arr.join('')==r){
           op.value='Palindrome';
       }
       else{
           op.value='Not Palindrome';
       }
    }