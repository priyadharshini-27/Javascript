function display1(){
    var c=document.getElementById('display');
    var n=parseInt(n1.value),m=1;
    
    while(m<=20){
   
        var d=document.createElement('div');
        d.setAttribute('style','display:flex;');

        var i=document.createElement('input');
        i.setAttribute('style','width:30px;text-align:center');
        i.value=m;
        d.appendChild(i);
        var p=document.createElement('p');
        p.innerHTML='*';
        console.log(p);
        d.appendChild(p)
        var j=document.createElement('input');
        j.setAttribute('style','width:30px;text-align:center');
        j.value=n;
        d.appendChild(j);
        var p=document.createElement('p');
        p.innerHTML='=';
        d.appendChild(p)
        var k=document.createElement('input');
        k.setAttribute('style','width:30px;text-align:center');
        k.value=m*n;
        d.appendChild(k);
        document.getElementById('display').appendChild(d);
        m++;
    }
}