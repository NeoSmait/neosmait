let clock = document.getElementById("clock");
let appDays = document.getElementById("ndays");
let appMonth = document.getElementById("nmonths");

setInterval(function () {
	let date = new Date();

	let nowdays = date.getDate();
	let nowyears = date.getFullYear();

	const months = [
		'января',
		'февраля',
		'марта',
		'апреля',
		'мая',
		'июня',
		'июля',
		'августа',
		'сентября',
		'октября',
		'ноября',
		'декабря'
	];
	let m = date.getMonth();
	strMonths = `${nowdays} ${months[m]} ${nowyears} года`;
	appMonth.textContent = strMonths;

	const days = [
		'воскресенье',
		'понедельник',
		'вторник',
		'среда',
		'четверг',
		'пятница',
		'суббота'
	];
	let n = date.getDay();
	strDays = `Сегодня ${days[n]}`;
	appDays.textContent = strDays;

	let hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
	let minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
	let seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();

	strClocke = `${hours}:${minutes}<small>:${seconds}</small>`;
	clock.innerHTML = strClocke;
}, 1000);