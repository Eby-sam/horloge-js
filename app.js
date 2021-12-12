let secondsNeedle = document.getElementById("secondes");
let minutesNeedle = document.getElementById("minutes");
let hoursNeedle = document.getElementById("heures");

setInterval(function(){
        let dateNow = new Date();
        let sec = dateNow.getSeconds();
        let min = dateNow.getMinutes();
        let heur = dateNow.getHours();

        let secTime = ((sec / 60) * 360);
        secondsNeedle.style.transform = "rotate(" + (secTime) + "deg)";

        let minTime = ((min / 60) * 360) + (sec / 60);
        minutesNeedle.style.transform = "rotate(" + (minTime) + "deg)";

        let heurTime = ((heur / 12) * 360) + (min / 60 );
        hoursNeedle.style.transform = "rotate(" + (heurTime) + "deg)";

        document.getElementById("time").innerHTML = new Date().toLocaleTimeString();
        document.getElementById("date").innerHTML = new Date().toLocaleDateString();
    },1000);