// Alarm Clock

function play() {
    var audio = new Audio(`https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3`);
    audio.play();
}

setInterval(() => {
    let d = new Date();
    document.getElementById("time").innerHTML = d.toDateString() + " " + d.toTimeString();
}, 1000);

const setAlarm = (seconds) => {
    let alarmTime = new Date().getTime() + seconds * 1000;
    
    const countdownInterval = setInterval(() => {
        let currentTime = new Date().getTime();
        let secondsLeft = Math.floor((alarmTime - currentTime) / 1000);

        if (secondsLeft > 0) {
            document.getElementById("alarm").innerHTML =
                "Alarm ringing in " + secondsLeft + " seconds";
        } else {
            document.getElementById("alarm").innerHTML = "Alarm ringing!";
            play();
            clearInterval(countdownInterval); // Stop the interval
        }
    }, 1000); // Update every second
};

let s = prompt("After how many seconds do you want an alarm?");
if (!isNaN(s) && s > 0) {
    setAlarm(parseInt(s));
} else {
    alert("Please enter a valid positive number.");
}