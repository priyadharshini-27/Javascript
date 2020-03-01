function display(){
    var n=parseInt(n1.value);
    switch(n%2==0)
    {
        case true:
            op.value='Even';
            break;
        case false:
            op.value ='Odd';
            break;
    }
}