var operation=document.getElementById('root');

var firstLabel=document.createElement("label");
firstLabel.innerHTML='Number:  '
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
subBtn.setAttribute('onclick','square();return false');
subBtn.id='Btn';
operation.appendChild(subBtn);

var linebreak = document.createElement('br');           
operation.appendChild(linebreak);

var outputLabel=document.createElement("label");
outputLabel.innerHTML='Square root of number:  '
outputLabel.setAttribute('style','margin-bottom:2px');
operation.appendChild(outputLabel);

var linebreak = document.createElement('br');           
operation.appendChild(linebreak);

var output=document.createElement("input");
output.type='text';
output.setAttribute('style','margin-bottom:4px');
operation.appendChild(output);
   
function square(){
    output.value=Math.sqrt(parseInt(firstInput.value));
}