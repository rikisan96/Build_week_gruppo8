const timer=function(){
    const sec=60;

    text=document.querySelector("#secondi_rimanenti p");

    text.innerHTML=sec;

    setInterval(function(){
        text.innerHTML=sec;
    }, 1000)
}

timer();