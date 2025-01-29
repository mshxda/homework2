//задача 1.
let age = prompt("Введите ваш возраст:");
if (age < 65) {
    console.log("Вам ещё рано на пенсию");
} else {
    console.log("Поздравляем с пенсионным возрастом!");
}

//задача 2.
let a = prompt("Введите первое число");
let b = prompt("Введите второе число");
if (a > b) {
    console.log("Первое число больше"); 
} else if (a < b) {
    console.log("Второе число больше"); 
} else {
    console.log("Числа равны"); 
}

//задача 3.
let о = prompt("Введите число:");
if (о % 2 === 0) {
    console.log("Это чётное число");
} else {
    console.log("Это нечётное число");
}