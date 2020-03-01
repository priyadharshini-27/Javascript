function display()
{
    var n=parseInt(n1.value);
if (n==0){
    op.value="Sunday";
}
else if (n==1){
    op.value="Monday";
}
else if (n==2){
    op.value="Tuesday";
}
else if (n==3){
    op.value="Wednesday";
}
else if (n==4){
    op.value="Thursday";
}
else if (n==5){
    op.value="Friday";
}
else if (n==6){
    op.value="Saturday";
}
else{
    op.value="You Entered Wrong Number";
}
}