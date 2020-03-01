function display1(){
    var i=32
    while(i!=127)
    {   
        var input=document.createElement('input');
        input.setAttribute('style','width:30px;text-align:center');
        input.value=String.fromCharCode(i);
        document.getElementById('display').appendChild(input);
        // console.log(String.fromCharCode(i));
        i++;
    }
}