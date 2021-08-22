//1. Почему код дает именно такие результаты?
var a = 1, b = 1, c, d;
c = ++a; //alert(c);           // 2--  ++а это аналог с = а + 1
d = b++; //alert(d);           // 1--  b++ увеличивает b на 1, но возвращает старое значение
c = (2 + ++a); //alert(c);      // 5--  2 + 3 = 5, а уже рано 2 и еще прибавляем 1 получается 3, и еще 2 получается 5
d = (2 + b++); //alert(d);      // 4--  b равно 2, но мы увеличиваем b на 1, но возвращаем 2, 2+2 =4
//alert(a);                    // 3 -- дважды увеличили на 1
//alert(b);                    // 3-- дважды увеличили на 1

//2
var a = 2;
var x = 1 + (a *= 2); // 5, a *= 2 это а = а * 2

//3. Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
//если a и b положительные, вывести их разность;
//если а и b отрицательные, вывести их произведение;
//если а и b разных знаков, вывести их сумму;
//Ноль можно считать положительным числом.

var a = -2, b = -3;

if (a >= 0 && b >= 0) { alert(a - b) }
else if (a <= 0 && b <= 0) { alert(a * b) }
else if ((a <= 0 && b >= 0) || (a >= 0 && b <= 0)) { alert(a + b) }

//4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15

var list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var num = +prompt();
switch (num) {
    case 0: alert(list.slice(0))
        break
    case 1: alert(list.slice(1))
        break
    case 2: alert(list.slice(2))
        break
    case 3: alert(list.slice(3))
        break
    case 4: alert(list.slice(4))
        break
    case 5: alert(list.slice(5))
        break
    case 6: alert(list.slice(6))
        break
    case 7: alert(list.slice(7))
        break
    case 8: alert(list.slice(8))
        break
    case 9: alert(list.slice(9))
        break
    case 10: alert(list.slice(10))
        break
    case 11: alert(list.slice(11))
        break
    case 12: alert(list.slice(12))
        break
    case 13: alert(list.slice(13))
        break
    case 14: alert(list.slice(14))
        break
    case 15: alert(list.slice(15))
        break
}

//Реализовать четыре основные арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

function math(a, b) {
    return ('a + b = ' + (a + b) + ',' + ' a - b = ' + (a - b) + ',' + ' a / b = ' + Math.round(a / b) + ',' + ' a * b = ' + Math.round(a * b))
}

alert(math(5, 6))

