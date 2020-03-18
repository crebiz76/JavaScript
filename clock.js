const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

const stopwatchContainer = document.querySelector(".js-stopwatch");
const stopwatchTitle = stopwatchContainer.querySelector("h1");



function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours<10?`0${hours}`:hours}:${
                              minutes<10?`0${minutes}`:minutes}:${
                              seconds<10?`0${seconds}`:seconds}`;
	
	const MaxHour = 17;
	const MaxMinute = 0;
	const MaxSecond = 0;
	var flag = false;
	
	var gapHour = 0;
	var gapMinute = 0;
	var gapSecond = 0;
	
	if((hours >= MaxHour) && (minutes >= MaxMinute) && (seconds >= MaxSecond))
	{
		flag = true;
		gapHour = hours - MaxHour;
		gapMinute = minutes - MaxMinute;
		gapSecond = seconds - MaxSecond;
	}
	else
	{
		flag = false;
		gapHour = MaxHour - hours;
		gapMinute = MaxMinute - minutes;
		gapSecond = MaxSecond - seconds;
	}
	stopwatchTitle.innerText = `${flag == true?`+`:`-`}${gapHour<10?`0${gapHour}`:gapHour}:${
                                  gapMinute<10?`0${gapMinute}`:gapMinute}:${
                                  gapSecond<10?`0${gapSecond}`:gapSecond}`;
}
function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();