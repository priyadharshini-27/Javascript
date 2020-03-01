function display1(){
    var c=1;
    while(c<101){
    var i=document.createElement('input');
    i.setAttribute("style",'text-align:center;width:44px')
    i.value=c;
    document.getElementById('display').appendChild(i);
    var br=document.createElement('br');
    document.getElementById('display').appendChild(br);
    c=c+2;
}
}