var today = new Date()
var day = today.getDay()
console.log(day)

var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
let currentDay = document.getElementById("date")

currentDay.textContent = dayList[day] 


let currentTime = document.getElementById("utc")
let currentMsTime = Math.floor((new Date().getTime()/1000))
currentTime.textContent = currentMsTime 
console.log(currentTime)