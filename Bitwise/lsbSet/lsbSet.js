function display(){
    var n=parseInt(n1.value);
    var binary=n.toString(2);
    //console.log(binary);
    if(binary&1){
            op.value='Set';
            }
    else{
            op.value ='Not';
    }
}