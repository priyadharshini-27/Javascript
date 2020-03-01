function display1(){
    var n=parseInt(n1.value),i=0,d=0;
    while(n != 0)           
    {   
        var r=n%10;
        var d = d +( (r) * (2**i));
        i++;
        n =parseInt( n / 10);
    }
    //console.log(d); 
    op.value=d.toString(16);
}