function display1(){
    var k=97;
    while(k!=123){
        var i=document.createElement('input');
        i.setAttribute('style','width:44px;text-align:center');
        var str=String.fromCharCode(k);
        i.value=str;
        document.getElementById('display').appendChild(i);
        var b=document.createElement('br');
        document.getElementById('display').appendChild(b);
        k++;
    }
    
}
