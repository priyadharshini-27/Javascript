var operation=document.getElementById('power');
operation.setAttribute('style','display:flex')

var numberLabel=document.createElement("label");
numberLabel.innerHTML='Number:  '
operation.appendChild(numberLabel);

var numberInput=document.createElement("input");
numberInput.type='text';
operation.appendChild(numberInput);

var powerLabel=document.createElement("label");
powerLabel.innerHTML='Power:  '
operation.appendChild(powerLabel);

var powerInput=document.createElement("input");
powerInput.type='text';
powerInput.setAttribute('style','margin-right:4px')
operation.appendChild(powerInput);

var subBtn=document.createElement('input');
subBtn.type='submit';
subBtn.setAttribute('onclick','display1();return false');
subBtn.id='Btn';
operation.appendChild(subBtn);

var display=document.getElementById('display');

var outputLabel=document.createElement("label");
outputLabel.innerHTML='Result:  '
outputLabel.setAttribute('style','margin-bottom:2px');
display.appendChild(outputLabel);

var linebreak = document.createElement('br');           
display.appendChild(linebreak);

var output=document.createElement("input");
output.type='text';
output.setAttribute('style','margin-bottom:4px');
display.appendChild(output);
   
function display1(){
    output.value=(parseInt(numberInput.value))**(powerInput.value);
}