let hours = null
let minutes = null
let seconds = null

export const specialOfferCounter = () => {
    const specialCard = document.getElementById("special-card")

    if (!specialCard) return

    const { expires } = specialCard.dataset

    if (!expires) return

    const hoursElement = specialCard.querySelector("#special-card__hours")
    const minutesElement = specialCard.querySelector("#special-card__minutes")
    const secondsElement = specialCard.querySelector("#special-card__seconds")

    const times = expires
        .split(":")
        .map(time => Number(time))

    hours = times[0]
    minutes = times[1]
    seconds = times[2]

    setInterval(() => {
        setTime(times, hoursElement, minutesElement, secondsElement)
    }, 1000)
}

function setTime(times, hoursElement, minutesElement, secondsElement) {
    const resultHours = hours < 10 ? `0${hours}` : hours
    const resultMinutes = minutes < 10 ? `0${minutes}` : minutes
    const resultSeconds = seconds < 10 ? `0${seconds}` : seconds
    
    hoursElement.textContent = resultHours
    minutesElement.textContent = resultMinutes
    secondsElement.textContent = resultSeconds

    if (seconds > 0) {
        return seconds--
    } else if (minutes > 0 && seconds === 0) {
        seconds = 59
        return minutes--
    } else if (hours > 0 && minutes === 0 && seconds === 0) {
        seconds = 59
        minutes = 59
        return hours--
    } else {
        hours = times[0]
        minutes = times[1]
        seconds = times[2]
    }


}