const clockHandHours = document.querySelector('.hand.Hours')
const clockHandMinutes = document.querySelector('.hand.Minutes')
const clockHandSeconds = document.querySelector('.hand.Seconds')
const timeSpan = document.querySelector('span#time')

function setHands() {
  const Total_Milliseconds_Of_Day = 86400000
  const Milliseconds_Of_Day =
    new Date().getTime() - new Date().setHours(0, 0, 0, 0)
  const DayProgress = Milliseconds_Of_Day / Total_Milliseconds_Of_Day

  // calculate progress in degreses multiplicated by the implementation
  const HoursRotation = DayProgress * 360 * 2
  const MinutesRotation = DayProgress * 360 * 24
  const SecondsRotation = DayProgress * 360 * 1440

  // subtract css offset (90deg)
  clockHandHours.setAttribute('style', `--rotation:${HoursRotation - 90}deg`)
  clockHandMinutes.setAttribute(
    'style',
    `--rotation:${MinutesRotation - 90}deg`
  )
  clockHandSeconds.setAttribute(
    'style',
    `--rotation:${SecondsRotation - 90}deg`
  )
  // display time in span
  const Hours = ('0' + new Date().getHours()).slice(-2)
  const Minutes = ('0' + new Date().getMinutes()).slice(-2)
  const Seconds = ('0' + new Date().getSeconds()).slice(-2)
  timeSpan.innerHTML = `${Hours}:${Minutes}:${Seconds}`
}

// rerender every 10 ms
window.setInterval(setHands, 10)

//  add sw
if (navigator.serviceWorker) {
  navigator.serviceWorker.register('sw.js')
}
