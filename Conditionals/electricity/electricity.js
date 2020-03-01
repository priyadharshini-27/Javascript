function display()
{
    var n=parseInt(n1.value),charge;
    if(n<=50){
        charge=n*0.50;
    }
    else if((n>50)&&(n<=150)){
        charge=(25)+((n-50)*0.75);
    }
    else if((n>150)&&(n<=250)){
        charge=(75)+((n-150)*1.20);
    }
    else if(n>250){
        charge=(200)+((n-250)*1.50);
        //console.log(charge);
    }
    var subcharge=(20/100)*(charge);
    op.value=charge+subcharge;
}