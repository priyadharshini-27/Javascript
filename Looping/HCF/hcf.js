function display1(){
    var n=parseInt(n1.value),m=parseInt(n2.value),count=1;
    var min = (n<m) ? n : m;
    while(count<=min){
        if((n%count==0) && (m%count==0)){
            var hcf=count;
        }
        count++;
    }
    op.value=hcf;
}