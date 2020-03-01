function display1(){
    var n=n1.value,c=0;
    while(c!=n){
        var i=document.createElement('input');
        i.setAttribute('style','width:44px;text-align:center');
        i.value=c+1;
        document.getElementById('display').appendChild(i);
        var b=document.createElement('br');
        document.getElementById('display').appendChild(b);
        c++;
    }
}