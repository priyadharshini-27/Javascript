function display1(){
    var n=parseInt(n1.value),freq=[],r=n;
        for(var i=0;i<10;i++){
            freq[i]=0;
        }
        while(n>0){
            var t=n%10;
            freq[t]++;
            n=parseInt(n/10);
        }
        //console.log(freq);
        for(var i=0;i<10;i++){
            var count=freq[i];
            if(count!=0){
                var d=document.createElement('div');
                d.setAttribute('style','display:flex;');

                var input=document.createElement('input');
                input.setAttribute('style','width:30px;text-align:center');
                input.value=i;
                d.appendChild(input);

                var p=document.createElement('p');
                p.innerText=' occurs ';
                d.appendChild(p);

                var input1=document.createElement('input');
                input1.setAttribute('style','width:30px;text-align:center');
                input1.value=count;
                d.appendChild(input1);

                document.getElementById('display').appendChild(d);
                console.log(i);
                console.log(count);
            }
            
        }
    
    }