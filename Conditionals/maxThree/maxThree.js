function display(){
    if ((n1.value>n2.value) && (n1.value>n3.value)){
        max.value=n1.value;
    }
    else if((n2.value>n3.value) && (n2.value>n1.value)){
        max.value=n2.value;
    }
    else {
        max.value=n3.value;
    }
}