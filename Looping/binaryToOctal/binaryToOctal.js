function display1(){
    var n=parseInt(n1.value),i=0,d=0;
    while(n != 0)           
    {   
        var r=n%10;
        var d = d +( (r) * (2**i));
        i++;
        n =parseInt( n / 10);
    }
    //console.log(d);         //binary to decimal
    var o=0,i=1;
    while(d!=0){
        var r=d%8;
        o=o+(r*i);
        d=parseInt(d/8);
        i=i*10;
    }
    // console.log(o);
    op.value=o;
}