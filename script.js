const deg = 6;
let hr = document.getElementById("hr");
let mn = document.getElementById("mn");
let sd = document.getElementById("sd");

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    
    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sd.style.transform = `rotateZ(${ss}deg)`;
})





