function display()
{
    var n=parseInt(n1.value);
switch(n){  
case 0:
    op.value="Sunday";
    break;
case 1:
    op.value="Monday";
    break;
case 2:
    op.value="Tuesday";
    break;
case 3:
    op.value="Wednesday";
    break;
case 4:
    op.value="Thursday";
    break;
case 5:
    op.value="Friday";  
    break;
case 6:
    op.value="Saturday";
    break;
default:
    op.value="You Entered Wrong Number";
    break;
}
}