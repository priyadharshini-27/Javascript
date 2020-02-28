var operation=document.getElementById('area');
operation.setAttribute('style','display:flex')

var firstLabel=document.createElement("label");
firstLabel.innerHTML='Side:  ';
firstLabel.setAttribute('style','margin-bottom:4px');
operation.appendChild(firstLabel);

var firstInput=document.createElement("input");
firstInput.type='text';
firstInput.setAttribute('style','margin-right:2px');
operation.appendChild(firstInput);

var subBtn=document.createElement('input');
subBtn.type='submit';
subBtn.setAttribute('onclick','display1();return false');
subBtn.id='Btn';
operation.appendChild(subBtn);

var display=document.getElementById('display');

var outputLabel=document.createElement("label");
outputLabel.innerHTML='Area:  ';
outputLabel.setAttribute('style','margin-bottom:2px');
display.appendChild(outputLabel);

var linebreak = document.createElement('br');           
display.appendChild(linebreak);

var output=document.createElement("input");
output.type='text';
output.setAttribute('style','margin-bottom:4px');
display.appendChild(output);
   
function display1(){
    output.value=((Math.sqrt(3))/(4))*(parseInt(firstInput.value));
}