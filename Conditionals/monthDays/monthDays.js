function display(){
    var months_31=['january','march','may','july','august','october','december'];
    var months_30=['april','june','september','november'];
    var x=n1.value;
    var y=x.toLowerCase()
    if(months_31.includes(y)){
        type.value='31';
    }
    else if(months_30.includes(y)) {
        type.value='30';}
    else {
        type.value='29'
}}