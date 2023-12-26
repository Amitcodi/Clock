let hr =document.getElementById("hour");
let min =document.getElementById("min");
let sec =document.getElementById("sec");
function displayTime(){
    let date =new Date();

    let hh =date.getHours();
    let mm=date.getMinutes();
    let ss =date.getSeconds();

    let hrr = 30*hh +mm/2;
    let mr = 6*mm;
    let ssr= 6*ss;

    hr.style.transform = `rotate(${hrr}deg)`;
    min.style.transform = `rotate(${mr}deg)`;
    sec.style.transform = `rotate(${ssr}deg)`;


}
setInterval(displayTime,1000);