function display1(){
var n=parseInt(n1.value),c=0;
    while(n>0){
        n=parseInt(n/10);
        c++;
    }
   op.value=c;
}