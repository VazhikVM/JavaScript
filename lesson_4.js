//1. Написать функцию, преобразующую число в объект.
//Передавая на вход число от 0 до 999, надо получить на выходе объект,
//в котором в соответствующих свойствах описаны единицы, десятки и сотни.
//Например, для числа 245 надо получить следующий объект:
//{‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999,
//необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

var a = prompt('введите число от 0 до 999')

function in_odj(x) {
    let arr = []
    if (x.toString().length === 3) {
        for (let i = 0; i <= x.toString().length; i++) {
            arr.push(x.toString()[i])
        }
        return JSON.stringify({ 'hundreds': arr[0], 'dozens': arr[1], 'units': arr[2] })
    }
    if (x.toString().length === 2) {
        for (let i = 0; i <= x.toString().length; i++) {
            arr.push(x.toString()[i])
        }
        return JSON.stringify({ 'hundreds': 0, 'dozens': arr[0], 'units': arr[1] })
    }
    if (x.toString().length === 1) {
        for (let i = 0; i <= x.toString().length; i++) {
            arr.push(x.toString()[i])
        }
        return JSON.stringify({ 'hundreds': 0, 'dozens': 0, 'units': arr[0] })
    }
    else { return 'Введено неверное число' }
}
alert(in_odj(a))

//2. Продолжить работу с интернет-магазином:
//В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
//Реализуйте такие объекты.
//Перенести функционал подсчета корзины на объектно-ориентированную базу.

price = { 'phone': 10990, 'watch': 5999, 'laptop': 35125 }
function countBasketPrice(x) {
    let sum_price = 0;
    for (let i of Object.values(x)) {
        sum_price += i
    }
    return sum_price
}

alert(countBasketPrice(price))