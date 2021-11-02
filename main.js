document.body.style.background = "red";

setTimeout(() => document.body.style.background = "", 1000);

let clock = document.getElementById("clock");
 
// Запускаем интервал
setInterval(function () {
    // Создаём объект класса Date
    let date = new Date()
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