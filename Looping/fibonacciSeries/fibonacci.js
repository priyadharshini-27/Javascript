function display1(){
    var f=0,s=1,c=0,n=parseInt(n1.value),sum=0;
    while(c<n){
        if(c==0){
            create(f);
        }
        else if(c==1){
            create(s);
        }
        else{
            sum=f+s;
            create(sum);
            f=s;
            s=sum;
        }
        c++;
    }
}
function create(temp){
    var input=document.createElement('input');
    input.setAttribute('style','width:30px;text-align:center')
    input.value=temp;
    document.getElementById('display').appendChild(input);
}