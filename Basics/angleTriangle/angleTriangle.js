var operation=document.getElementById('angle');
operation.setAttribute('style','display:flex')

var firstLabel=document.createElement("label");
firstLabel.innerHTML='First Angle:  '
firstLabel.setAttribute('style','margin-bottom:4px');
operation.appendChild(firstLabel);

var firstInput=document.createElement("input");
firstInput.type='text';
operation.appendChild(firstInput);

var secondLabel=document.createElement("label");
secondLabel.innerHTML='Second Angle:  '
secondLabel.setAttribute('style','margin-left:4px');
operation.appendChild(secondLabel);

var secondInput=document.createElement("input");
secondInput.type='text';
secondInput.setAttribute('style','margin-right:5px')
operation.appendChild(secondInput);

var subBtn=document.createElement('input');
subBtn.type='submit';
subBtn.setAttribute('onclick','display1();return false');
subBtn.id='Btn';
operation.appendChild(subBtn);

var display=document.getElementById('display');

var outputLabel=document.createElement("label");
outputLabel.innerHTML='Third Angle:  '
outputLabel.setAttribute('style','margin-bottom:2px');
display.appendChild(outputLabel);

var linebreak = document.createElement('br');           
display.appendChild(linebreak);

var output=document.createElement("input");
output.type='text';
output.setAttribute('style','margin-bottom:4px');
display.appendChild(output);
   
function display1(){
    output.value=180-(parseInt(firstInput.value)+parseInt(secondInput.value));
}