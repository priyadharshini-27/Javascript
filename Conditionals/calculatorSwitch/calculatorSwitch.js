function display(){
    var n=parseInt(n1.value),a=parseInt(n2.value),b=parseInt(n3.value);
    switch(n){
        case 1:
            op.value=a+b;
            break;
        case 2:
            op.value=a-b;
            break;
        case 3:
            op.value=a*b;
            break;
        case 4:
            op.value=a/b;
            break;
    }
}