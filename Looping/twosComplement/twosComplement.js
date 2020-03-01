function display1(){
    var n=n1.value,
    len=n.length,
    one=[],
    carry=1,
    two=[];
    // console.log(n.length);
    for(var i=0;i<len;i++){
        if(n[i]==0){
            one.push(1);
        }
        else{
            one.push(0);
        }
    }
    one=one.join('')
    //console.log(one);
    for(var j=(len-1);j>=0;j--){
        if((one[j]==1)&&(carry==1)){
            two[j]=0;
            console.log(two[j]);
        }
        else if((one[j]==0)&&(carry==1)){
            two[j]=1;
            carry=0;
        }
        else{
            two[j]=one[j];
        }
    }
    two=two.join('');
    op.value=two;
}
