function display(){
    var n=parseInt(n1.value);
    if(n==0){
        op.value=0;
    }
    else{
    switch(n>0)
    {
        case true:
            op.value='Positive';
            break;
        case false:
            op.value ='Negative';
            break;
    }
}
}