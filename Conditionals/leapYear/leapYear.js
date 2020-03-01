function display(){
    if ((n1.value%4==0) && (n1.value%100!=0) || (n1.value%400==0)){
        type.value='Leap Year';
    }
    else{
        type.value='Not Leap Year';
}}