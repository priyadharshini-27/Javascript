function display(){
    var n=parseInt(n1.value),m=parseInt(n2.value);;
    var binary=n.toString(2);
    console.log(binary);
    if(binary[m]==1){
            op.value='Set';
            }
    else{
            op.value ='Not';
    }
}