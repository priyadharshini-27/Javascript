function display(){
    if ((parseInt(n1.value)==parseInt(n2.value))&&(parseInt(n1.value)==parseInt(n3.value))){
        type.value='Equilateral Triangle';
    }
    else if ((parseInt(n2.value)==parseInt(n1.value))|| (parseInt(n3.value)==parseInt(n1.value)) ||(parseInt(n2.value)==parseInt(n3.value)))  {
        type.value='Isosceles Triangle';
}
else{
    type.value='Scalene Triangle';
}}