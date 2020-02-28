var operation=document.getElementById('meter');

var firstLabel=document.createElement("label");
firstLabel.innerHTML='Length in cm:  '
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
subBtn.setAttribute('onclick','length();return false');
subBtn.id='Btn';
operation.appendChild(subBtn);

var linebreak = document.createElement('br');           
operation.appendChild(linebreak);

var output1Label=document.createElement("label");
output1Label.innerHTML='Length in m:  '
output1Label.setAttribute('style','margin-bottom:2px');
operation.appendChild(output1Label);

var linebreak = document.createElement('br');           
operation.appendChild(linebreak);

var output1=document.createElement("input");
output1.type='text';
output1.setAttribute('style','margin-bottom:4px');
operation.appendChild(output1);

var linebreak = document.createElement('br');           
operation.appendChild(linebreak);

var output2Label=document.createElement("label");
output2Label.innerHTML='Length in km:  '
output2Label.setAttribute('style','margin-bottom:2px');
operation.appendChild(output2Label);

var linebreak = document.createElement('br');           
operation.appendChild(linebreak);

var output2=document.createElement("input");
output2.type='text';
output2.setAttribute('style','margin-bottom:4px');
operation.appendChild(output2);

var linebreak = document.createElement('br');           
operation.appendChild(linebreak);

   
function length(){
    output1.value=(parseInt(firstInput.value)/100);
    output2.value=(parseInt(firstInput.value)/100000)
} 