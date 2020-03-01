function display1(){
    var n=n1.value,
    len=n.length,
    one=[],
    carry=1,
    two=[];
    // console.log(n.length);
    for(var i=0;i<len;i++){
        if(n[i]==0){
            one.push(1);
        }
        else{
            one.push(0);
        }
    }
    one=one.join('')
    op.value=one;
}
