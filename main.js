document.body.style.background = "red";

setTimeout(() => document.body.style.background = "", 1000);

let clock = document.getElementById("clock");
let appDays = document.getElementById("ndays");

// Запускаем интервал
setInterval(function () {
	// Создаём объект класса Date
	let date = new Date()
	// Создаем масив с днями недели
	let days = [
		'воскресенье',
		'понедельник',
		'вторник',
		'среда',
		'четверг',
		'пятница',
		'суббота'
	];
	let n = date.getDay();
	// Создаём строку для вывода дня недели
	strDays = `Сегодня ${days[n]}`;
	appDays.innerHTML = strDays;
	// Получаем часы
	let hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
	// Получаем минуты
	let minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
	// Получаем секунды
	let seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
	// Создаём строку для вывода времени
	strClocke = `${hours}:${minutes}<small>:${seconds}</small>`;
	// Выводим время
	clock.innerHTML = strClocke;
}, 1000);