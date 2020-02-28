var operation=document.getElementById('perimeter');

var firstLabel=document.createElement("label");
firstLabel.innerHTML='Length:  '
firstLabel.setAttribute('style','margin-bottom:4px');
operation.appendChild(firstLabel);

var linebreak = document.createElement('br');           
operation.appendChild(linebreak);

var firstInput=document.createElement("input");
firstInput.type='text';
operation.appendChild(firstInput);

var linebreak = document.createElement('br');           
operation.appendChild(linebreak);

var secondLabel=document.createElement("label");
secondLabel.innerHTML='Breadth:  '
secondLabel.setAttribute('style','margin-bottom:2px');
operation.appendChild(secondLabel);

var linebreak = document.createElement('br');           
operation.appendChild(linebreak);

var secondInput=document.createElement("input");
secondInput.type='text';
secondInput.setAttribute('style','margin-bottom:4px');
operation.appendChild(secondInput);

var linebreak = document.createElement('br');           
operation.appendChild(linebreak);

var subBtn=document.createElement('input');
subBtn.type='submit';
subBtn.setAttribute('onclick','perimeter();return false');
subBtn.id='Btn';
operation.appendChild(subBtn);

var linebreak = document.createElement('br');           
operation.appendChild(linebreak);

var outputLabel=document.createElement("label");
outputLabel.innerHTML='Result:  '
outputLabel.setAttribute('style','margin-bottom:2px');
operation.appendChild(outputLabel);

var linebreak = document.createElement('br');           
operation.appendChild(linebreak);

var output=document.createElement("input");
output.type='text';
output.setAttribute('style','margin-bottom:4px');
operation.appendChild(output);
   
function perimeter(){
    output.value=2*(parseInt(secondInput.value)*parseInt(firstInput.value));
} 