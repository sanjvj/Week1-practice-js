var currentDate = new Date();
var currentHour = currentDate.getHours();
if (currentHour>9){
    currentFormat = currentHour
}
else{
    currentFormat = "0"+currentHour;
}
var currentMinutes = currentDate.getMinutes();
var currentSeconds = currentDate.getSeconds();
var currentHourTwelve = currentDate.toLocaleTimeString();
console.log(currentFormat+":"+currentMinutes+":"+currentSeconds);
console.log(currentHourTwelve);