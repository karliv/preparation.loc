//Задание №1.
//alert(typeof NaN);    //NaN - ошибка вычеслений. Так как NaN является специальным числовым значением, то aldert выведит number

//Задание №2.
//alert(NaN === NaN);   //Значение NaN по стандарту устроено так, что сравнения ==, <, >, <=, >= и даже === с ним возвращают false

//Задание №3.
//0.1 + 0.2 == 0.3? Не ровно. alert(0.1 + 0.2) => 0.30000000000000004. Проблема кроется в ошибке точности вычислений для чисел с плавающей точкой,
//где используется формат IEEE 754. В стандарте IEEE 754 на число выделяет ровно 8 байт(=64 бита).
//Число 0.1 записывается просто в десятичном формате, но в двоичной системе счисления это бесконечная дробь, 
//так как единица на десять в двоичной системе так просто не делится. Также бесконечной дробью является 0.2 (=2/10). 
//Двоичное значение бесконечных дробей хранится только до определенного знака, поэтому возникает неточность.


//Задание №4.
//var a = "a,b".split(',');     //["a", "b"]  Метод split преобразует строку в массив, разбив ее по разделителю (в данном случе разделитель - запятая)


//Задание №5.
document.querySelector('.task-link5').addEventListener('click', () => {alert('Hello world!')});


//Задание №6.
document.querySelector('.task-link6').addEventListener('click', (e) => {
  e.preventDefault();

  for (let i = 0; i < document.querySelectorAll('.one').length; i++) {
    document.querySelectorAll('.one')[i].classList.toggle('three');
  }

  for (let i = 0; i < document.querySelectorAll('.two').length; i++) {
    document.querySelectorAll('.two')[i].classList.toggle('three');
  }
});

//Задание №7.
document.querySelectorAll('.red').forEach((elem) => elem.childNodes[0].tagName === 'SPAN' ? 
                                          elem.getElementsByTagName('span')[0].style.backgroundColor = 'red' : null);


//Задание №8.
function init() {
  var name = "Евгений"; // name - локальная переменная, созданная в init
  function showMyName() { // showMyName() - внутренняя функция, замыкание
      alert (name); // displayName() использует переменную, объявленную в родительской функции    
  }
  showMyName();    
}
//init();


//Задание №9.
function changeTime(time, int) {
  let newTime = time.split(':');

  let hour = +newTime[0];
  let minute = +newTime[1];

  let date = new Date(2019, 2, 2, hour, minute + int);
  var options = { hour: 'numeric', minute: 'numeric'};

  return date.toLocaleTimeString("ru", options);
}

console.log(changeTime('10:00', 25))
console.log(changeTime('10:00', -1))
console.log(changeTime('23:59', 1))
console.log(changeTime('10:00', -1))


//Задание №10.
function clock_degree(time) {
  let newTime = time.split(':');

  let hour = +newTime[0];
  let minute = +newTime[1];

  if (hour >= 24) {
    return "Check your time !"
  } else if (hour > 12) {
    hour = 30 * (hour - 12)
  } else if (hour === 0) {
    hour = 360;
  } else {
    hour = 30 * hour;
  }

  if (minute >= 60) {
    return "Check your time !"
  } else if (minute === 0) {
    minute = 360;
  } else {
    minute = 6 * minute;
  }

  let degree = `${hour}:${minute}`

  return degree;
}

console.log(clock_degree('00:00'));   //"360:360"
console.log(clock_degree('01:01'));   //"30:6"
console.log(clock_degree("00:01"));   // "360:6"
console.log(clock_degree("01:00"));   // "30:360"
console.log(clock_degree("01:30"));   // "30:180"
console.log(clock_degree("24:00"));   // "Check your time !"
console.log(clock_degree("13:60"));   // "Check your time !"
console.log(clock_degree("20:34"));   // "240:204"

//Задание №11.
document.querySelector('.task-link11').addEventListener('click', guessNumber);

function guessNumber(e) {
  e.preventDefault();

  let num = Math.floor(Math.random() * (100 - 0));
  let answer;

  do {
    answer = prompt("Введите число больше 100?");

    (answer == num || answer == null) ? null : 
    num > answer ? alert('Введите большее число') : 
    alert('Введите меньшее число');
  } while (answer != num && answer != null);

  return alert('Вы угадали!!!');
}