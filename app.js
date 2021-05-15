const days=document.querySelectorAll('days');
const hours=document.querySelectorAll('hours');
const minutes=document.querySelectorAll('minutes');
const seconds=document.querySelectorAll('seconds');
 
const currentbirthday= new Date().getFullYear();

const birthday = new Date(`August 10 2021 ${currentbirthday + 1} 00:00:00`);

//update countdowntime
function updatecountdown(){
    const currentTime = new Date();
    const diff = birthday - currentTime;
    const d = Math.floor(diff / 1000/60/60/24);
    const h = Math.floor(diff / 1000/60/60)%24;
    const m = Math.floor(diff / 1000/60)%60;
    const s = Math.floor(diff / 1000)%60;
    document.getElementById('days').innerHTML=d;
    hours.innerHTML=h<10? '0'+h:h;
    minutes.innerHTML=m<10? '0'+m:m;
}
days.innerHtml=d;

setInterval(updatecountdown,1000);
