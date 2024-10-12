var day = document.getElementById("day");
const d = new Date();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let getday = weekday[d.getDay()];
day.innerHTML = getday;
var time = document.getElementById("time");
setInterval(function () {
    time.innerHTML = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

}, 1000);