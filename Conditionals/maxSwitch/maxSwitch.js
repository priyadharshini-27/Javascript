function display(){
    var n=parseInt(n1.value),m=parseInt(n2.value);
    switch(n>m)
    {
        case true:
            op.value=n;
            break;
        case false:
            op.value =m;
            break;
    }
}