const time=document.getElementById("time")
const mer=document.getElementById("mer")

function updateclock(){
const now=new Date();
let hr=now.getHours();
let merr=hr>=12?"PM":"AM";
hr=hr%12||12;
hr=hr.toString().padStart(2,0);




const min=now.getMinutes().toString().padStart(2,0);
const sec=now.getSeconds().toString().padStart(2,0);
time.textContent=`${hr}:${min}:${sec}`;
mer.textContent=merr;
}

updateclock();

setInterval(updateclock,1000)

 

 

 


