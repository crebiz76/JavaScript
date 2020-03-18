const calContainer = document.querySelector(".js-date");
const calTitle = calContainer.querySelector("h1");

const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

const stopwatchContainer = document.querySelector(".js-stopwatch");
const stopwatchTitle = stopwatchContainer.querySelector("h1");

function getTime(){
	const date = new Date();
	
	const birthday = "2019-02-16";
	const birthtime = "16:26";

	var dateArray = birthday.split("-");
	var dateObject = new Date(dateArray[0], Number(dateArray[1])-1, dateArray[2]);
	var betweenDay = (date.getTime() - dateObject.getTime())/1000/60/60/24;

    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours<10?`0${hours}`:hours}:${
                              minutes<10?`0${minutes}`:minutes}:${
                              seconds<10?`0${seconds}`:seconds}`;
	
	const DayOn = 8;
	const DayOff = 22;
	const MaxHour = 17;
	const MaxMinute = 0;
	const MaxSecond = 0;
	var flag = false;
	
	var gapHour = 0;
	var gapMinute = 0;
	var gapSecond = 0;
	
	if((hours < DayOn) || (hours >= DayOff))
	{
		flag = true;
		gapHour = 0;
		gapMinute = 0;
		gapSecond = 0;
	}
	else if((hours >= MaxHour) && (minutes >= MaxMinute) && (seconds >= MaxSecond))
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
									
	var timeArray = birthtime.split(":");
	if(timeArray[0] > hours)
	{
		betweenDay -= 1;
		pastHour = (hours + 24) - timeArray[0];
	}
	else
	{
		pastHour = hours - timeArray[0];
	}

	if(timeArray[1] > minutes)
	{
		pastHour -= 1;
		pastMinute = (minutes + 60) - timeArray[0];
	}
	else
	{
		pastMinute = minutes - timeArray[0];
	}

	calTitle.innerHTML = `${parseInt(betweenDay)} Days ${pastHour} Hours ${pastMinute} Minutes`;
}
function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();