const clockHandHour = document.querySelector('.hand.hour')
const clockHandMinute = document.querySelector('.hand.minute')

function setHands() {
  const Total_Milliseconds_Of_Day = 86400000
  const Milliseconds_Of_Day =
    new Date().getTime() - new Date().setHours(0, 0, 0, 0)
  const PassedTime = Milliseconds_Of_Day / Total_Milliseconds_Of_Day

  // calculate progress in degreses multiplicated by the implementation
  const HourRotation = PassedTime * 360 * 2
  const MinuteRotation = PassedTime * 360 * 24

  // subtract css offset (90deg)
  clockHandHour.setAttribute('style', `--rotation:${HourRotation - 90}deg`)
  clockHandMinute.setAttribute('style', `--rotation:${MinuteRotation - 90}deg`)
}

// rerender every sec
window.setTimeout(setHands, 1000)
