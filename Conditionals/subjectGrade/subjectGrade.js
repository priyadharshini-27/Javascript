function display1()
{
    var s=parseInt(s1.value)+parseInt(s2.value)+parseInt(s3.value)+parseInt(s4.value)+parseInt(s5.value);
    op1.value=(s/500)*100;
    if (op1.value>=90){
        op2.value='Grade A';
    }
    else if(op1.value>=80){
        op2.value='Grade B';
    }
    else if(op1.value>=70){
        op2.value='Grade C';
    }
    else if(op1.value>=60){
        op2.value='Grade D';
    }
    else if(op1.value>=40){
        op2.value='Grade E';
    }
    else{
        op2.value='Grade F';
    }
}