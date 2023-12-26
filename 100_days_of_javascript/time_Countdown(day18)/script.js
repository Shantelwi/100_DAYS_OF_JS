// Time Count Down
let time = 1; // time in minutes
let promoTime = time * 60;

let counting = document.getElementById("countdown");

function startCountdown() {
    let promoTimer = setInterval( () => {
        if (promoTime <= 0) {
            clearInterval(promoTimer);
            counting.innerHTML = "Promo has Ended";
        } else {
            promoTime--;
            const days = Math.floor(promoTime / 3600 / 24);
            const hours = Math.floor(promoTime / 3600) % 24;
            const min = Math.floor(promoTime / 60) % 60;
            const sec = Math.floor(promoTime % 60);

            counting.innerHTML = `TIME: ${format(hours)}hr : ${format(min)}min : ${format(sec)}sec`;
        }
    }, 1000)
}

function format(t) {
    return t < 1 ? `0${t}` : t;
}

startCountdown();











































const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;