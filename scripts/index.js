const COUNTDOWNS = document.getElementById("countdowns")

function addzero(num) {

    if (num.toString().length <= 1) {
        return "0" + num.toString()
    } else {
        return num.toString()
    }

}

function countdown(to, elm) {

    let now = Date.now()

    let diff = to - now

    if (diff <= 0) return elm.innerText = `NOW!`;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);
    let years = 0

    if (days > 365) {
        years = Math.floor(days / 365);
        days = days % 365;
    }

    elm.innerText = `- ${addzero(years)}:${addzero(days)}:${addzero(hours)}:${addzero(minutes)}:${addzero(seconds)} -`

    setTimeout(() => {
        return countdown(to, elm)
    }, 1000);

}

function addCountdown(title, exp) {

    COUNTDOWNS.innerHTML += `
    <div class="countdown">
                <h2>${title}</h2>
                <hr>
                <p class="count" data-expiry="${exp}"></p>
            </div>
    `

}

addCountdown(`Will Div Finish The PM Series Before The Mili Concert?`, 1833843600000)
addCountdown(`Will Div Finish House of the Dragon by 2028?`, 1833843600000)
addCountdown(`Will Div Finish Kill la Kill?`, 1803862861000)
addCountdown(`Will Div Propose to His Boyfriend?`, 1893459600000)
addCountdown(`Will Div Finish Dungeon Meshi?`, 1803862861000)
addCountdown(`Will Div Get to Watch The Fully Animated CSM Series?`, 2051226000000)
addCountdown(`Will Div Finish Valheim?`, 1798678800000)

function tick() {

    document.querySelectorAll(".count").forEach(count => {

        countdown(count.getAttribute("data-expiry"), count)

    })

    let er = setInterval(() => {
        clearInterval(er)
        return tick()
    }, 1000);

}

tick()