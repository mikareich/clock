const clockHandHour = document.querySelector('.hand.hour')
const clockHandMinute = document.querySelector('.hand.minute')
const clockHandSecond = document.querySelector('.hand.second')

function setHands() {
  const Total_Milliseconds_Of_Day = 86400000
  const Milliseconds_Of_Day =
    new Date().getTime() - new Date().setHours(0, 0, 0, 0)
  const DayProgress = Milliseconds_Of_Day / Total_Milliseconds_Of_Day

  // calculate progress in degreses multiplicated by the implementation
  const HourRotation = DayProgress * 360 * 2
  const MinuteRotation = DayProgress * 360 * 24
  const SecondRotation = DayProgress * 360 * 1440

  // subtract css offset (90deg)
  clockHandHour.setAttribute('style', `--rotation:${HourRotation - 90}deg`)
  clockHandMinute.setAttribute('style', `--rotation:${MinuteRotation - 90}deg`)
  clockHandSecond.setAttribute('style', `--rotation:${SecondRotation - 90}deg`)
}

// rerender every sec
window.setInterval(setHands, 10)
