const timer=function(){
    var i=59;

    text=document.querySelector("#secondi_rimanenti p");


    setInterval(function(){
        if(i>0){
            text.innerHTML=i;
        }else if(i==0){
            text.innerHTML="boom";
        }else{
            clearInterval();
        }
        i--;
    }, 1000)
}

timer();