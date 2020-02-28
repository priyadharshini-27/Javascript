var operation=document.getElementById('temperature');

var firstLabel=document.createElement("label");
firstLabel.innerHTML='Temperature in celsius:  '
firstLabel.setAttribute('style','margin-bottom:4px');
operation.appendChild(firstLabel);

var linebreak = document.createElement('br');           
operation.appendChild(linebreak);

var firstInput=document.createElement("input");
firstInput.type='text';
operation.appendChild(firstInput);

var linebreak = document.createElement('br');           
operation.appendChild(linebreak);

var subBtn=document.createElement('input');
subBtn.type='submit';
subBtn.setAttribute('onclick','temperature();return false');
subBtn.id='Btn';
operation.appendChild(subBtn);

var linebreak = document.createElement('br');           
operation.appendChild(linebreak);

var outputLabel=document.createElement("label");
outputLabel.innerHTML='Temperature:  '
outputLabel.setAttribute('style','margin-bottom:2px');
operation.appendChild(outputLabel);

var linebreak = document.createElement('br');           
operation.appendChild(linebreak);

var output=document.createElement("input");
output.type='text';
output.setAttribute('style','margin-bottom:4px');
operation.appendChild(output);
   
function temperature(){
    output.value=(parseInt(firstInput.value)*(9/5))+32;
} 