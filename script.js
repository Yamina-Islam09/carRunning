var m=0;
var y=0;
let start=document.querySelector('#start');
let stop1=document.querySelector('#stop');

start.addEventListener('click',go);
stop1.addEventListener('click',end);

function go(){
    y=setInterval(run,50);
   
    function run(){
        if(m==1200){
          m=0;
          clearInterval(y);
        }else{
            m+=10;
        var x=document.querySelector('#img');
        x.style.marginLeft=m+'px';
        }
    }
}

function end(){
    clearInterval(y);
    
}