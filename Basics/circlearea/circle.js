var operation=document.getElementById('area');

var firstLabel=document.createElement("label");
firstLabel.innerHTML='Radius:  '
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
subBtn.setAttribute('onclick','circle();return false');
subBtn.id='Btn';
operation.appendChild(subBtn);

var linebreak = document.createElement('br');           
operation.appendChild(linebreak);

var output1Label=document.createElement("label");
output1Label.innerHTML='Diameter:  '
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
output2Label.innerHTML='Area:  '
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

var output3Label=document.createElement("label");
output3Label.innerHTML='Circumference:  '
output3Label.setAttribute('style','margin-bottom:2px');
operation.appendChild(output3Label);

var linebreak = document.createElement('br');           
operation.appendChild(linebreak);

var output3=document.createElement("input");
output3.type='text';
output3.setAttribute('style','margin-bottom:4px');
operation.appendChild(output3);
   
function circle(){
    output1.value=(2*parseInt(firstInput.value));
    output2.value=(3.14*parseInt(firstInput.value)*parseInt(firstInput.value))
    output3.value=(3.14*2*parseInt(firstInput.value))
} 