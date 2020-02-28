var operation=document.getElementById('day');

var firstLabel=document.createElement("label");
firstLabel.innerHTML='Days:  '
firstLabel.setAttribute('style','margin-bottom:4px');
operation.appendChild(firstLabel);

var linebreak = document.createElement('br');           
operation.appendChild(linebreak);

var firstInput=document.createElement("input");
firstInput.type='text';
firstInput.setAttribute('style','margin-bottom:5px')
operation.appendChild(firstInput);

var linebreak = document.createElement('br');           
operation.appendChild(linebreak);

var subBtn=document.createElement('input');
subBtn.type='submit';
subBtn.setAttribute('onclick','temperature();return false;');
subBtn.id='Btn';
operation.appendChild(subBtn);

var linebreak = document.createElement('br');           
operation.appendChild(linebreak);

var display=document.getElementById('display');
display.setAttribute('style','diplay:flex;margin-top:4px')

var output1=document.createElement("input");
output1.type='text';
output1.setAttribute('style','margin-bottom:4px;width:40px');
display.appendChild(output1);

var outputLabel=document.createElement("label");
outputLabel.innerHTML='years'
outputLabel.setAttribute('style','margin-left:2px');
display.appendChild(outputLabel);

var output2=document.createElement("input");
output2.type='text';
output2.setAttribute('style','margin-bottom:4px;width:40px');
display.appendChild(output2);

var outputLabel=document.createElement("label");
outputLabel.innerHTML='weeks'
outputLabel.setAttribute('style','margin-left:2px');
display.appendChild(outputLabel);

var output3=document.createElement("input");
output3.type='text';
output3.setAttribute('style','margin-bottom:4px;width:40px');
display.appendChild(output3);

var outputLabel=document.createElement("label");
outputLabel.innerHTML='days'
outputLabel.setAttribute('style','margin-left:2px');
display.appendChild(outputLabel);

   
function temperature(){
    var d=parseInt(firstInput.value);
    output1.value=parseInt(d/365);
    output2.value=parseInt((d%365)/7);
    output3.value=parseInt((d%365)%7);
}