var sum=document.getElementById('sum');

var firstLabel=document.createElement("label");
firstLabel.innerHTML='Value_1:  '
firstLabel.setAttribute('style','margin-bottom:4px');
sum.appendChild(firstLabel);

var linebreak = document.createElement('br');           
sum.appendChild(linebreak);

var firstInput=document.createElement("input");
firstInput.type='text';
sum.appendChild(firstInput);

var linebreak = document.createElement('br');           
sum.appendChild(linebreak);

var secondLabel=document.createElement("label");
secondLabel.innerHTML='Value_2:  '
secondLabel.setAttribute('style','margin-bottom:2px');
sum.appendChild(secondLabel);

var linebreak = document.createElement('br');           
sum.appendChild(linebreak);

var secondInput=document.createElement("input");
secondInput.type='text';
secondInput.setAttribute('style','margin-bottom:4px');
sum.appendChild(secondInput);

var linebreak = document.createElement('br');           
sum.appendChild(linebreak);

var subBtn=document.createElement('input');
subBtn.type='submit';
subBtn.setAttribute('onclick','sum1();return false');
subBtn.id='Btn';
sum.appendChild(subBtn);

var linebreak = document.createElement('br');           
sum.appendChild(linebreak);

var outputLabel=document.createElement("label");
outputLabel.innerHTML='Sum:  '
outputLabel.setAttribute('style','margin-bottom:2px');
sum.appendChild(outputLabel);

var linebreak = document.createElement('br');           
sum.appendChild(linebreak);

var output=document.createElement("input");
output.type='text';
output.setAttribute('style','margin-bottom:4px');
sum.appendChild(output);

function sum1(){
    output.value=parseInt(secondInput.value)+parseInt(firstInput.value);

}    