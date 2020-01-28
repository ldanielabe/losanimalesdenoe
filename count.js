const getRemainTime= deadline => {
    let now = new Date(),
    remainTime = (new Date(deadline)- now +1000)/1000,
    remainSeconds= ('0'+Math.floor(remainTime % 60)).slice(-2),
    remainMinuts= ('0'+Math.floor(remainTime / 60 % 60)).slice(-2),
    remainHours= ('0'+Math.floor(remainTime / 3600 % 24)).slice(-2),
    remainDays= Math.floor(remainTime / (3600 *24));

    return{
        remainTime,
        remainSeconds,
        remainMinuts,
        remainHours,
        remainDays
    }
};


const countDown=(deadline,elem,finalMessage)=>{
const el= document.getElementById(elem);

const timerUpdate= setInterval( ()=>{
 let t= getRemainTime(deadline);
 el.innerHTML = `Faltan ${t.remainDays} dias con ${t.remainHours}:${t.remainMinuts}:${t.remainSeconds}`;

if(t.remainTime<=1){
    clearInterval(timerUpdate);
    el.innerHTML= finalMessage;
}

},1000)
}; 

countDown('Feb 9 2020 08:00:00 GMT-0550','clock', 'Hoy es la inaguración!');

$(document).ready(function() {
    $('.mdb-select').materialSelect();
    });