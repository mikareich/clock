const Time = {
  hour: new Date().getHours(),
  minute: new Date().getMinutes(),
}

const clockHandHour = document.querySelector('.hand.hour')
const clockHandMinute = document.querySelector('.hand.minute')

function setHands(hand, value) {
  let rotation = hand === clockHandMinute ? value * 6 : value * 15
  // set css variable and subtract css offset of hands
  hand.setAttribute('style', `--rotation:${rotation - 90}deg`)
}

setHands(clockHandHour, Time.hour)
