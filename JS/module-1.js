//Напиши скрипт который просит ввести число и степень.
//Возводит число в эту степень и выводит результат в консоль

/* const number = Number(prompt('Write a number'));
const pow = Number(prompt('Write a pow'));

console.log(number);
console.log(pow);

const result = Math.pow(number, pow);

console.log(result); */

/* Напиши скрипт подсчета суммы покупки со скидкой в зависимости
от потраченноц суммы за все время (партнерская программа).

- Общая сумма потраченного хранится в переменной totalSpent
- Сумма текущего платежа в переменно Payment
- Скидка хранится в переменной discount

- Если потрачено от [100 до 1000) - бронзовый партнер скидка -2%
- Если потрачено от [1000 до 5000) - серебрянный партнер, скидка 5%
- Если потрачено больше [5000 - золотой партнер, скидка 10%
- Если потрачено меньше 100) - не партнер скидка 0%

- В результате вывести сообщение:
"Оформляем заказ на сумму [сумма] со скидкой [скидка]%"
*/

/* const totalSpent = 20000;
let payment = 100;
let discount = 0;
let message = ''; */

/* const bronze = 2;
const Silver = 5;
const gold = 10;
const notPartner = 0;

if(totalSpent >= 100 && totalSpent < 1000) {
    message = `Оформляем заказ на сумму ${payment} со скидкой ${bronze}%;`;
} else if(totalSpent >= 1000 && totalSpent < 5000) {
    message = `Оформляем заказ на сумму ${payment} со скидкой ${Silver}%`;
} else if(totalSpent >= 5000) {
    message = `Оформляем заказ на сумму ${payment} со скидкой ${gold}%`;
} else {
    message = `Оформляем заказ на сумму ${payment} со скидкой ${notPartner}%`;
}
console.log(message); */

/* if(totalSpent >= 100 && totalSpent < 1000) {
    discount = 0.02;
} else if(totalSpent >= 1000 && totalSpent < 5000) {
    discount = 0.02;
} else if (totalSpent >= 5000) {
    discount = 0.10;
}

payment -= payment * discount;

message = `Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`;

console.log(message); */

//Task 1
/* let a;
let b;
let c;

a = 36 - 2;
b = 15 + 5;
c = 'New '

a = a + 2; // = 36
b = b - 5; // = 15
c = c + 'srtring'; // = New string

console.log(a);
console.log(b);
console.log(c); */

//Task 2
/* Вы просите пользователя ввести сумму его зарплаты. Затем
рассчитываете:

- Добавку в виде премии в сумме 15% от зарплаты.
- Налоги в сумме 10% от суммы всех начислений (зарплата + премия).
- Трату в магазине в сумме 190.
- Разделяете оставшуюся сумму между пользователем и его
"женой"/"мужем".

При решении используйте арифметические операторы присваивания,
например, res -=100 или res /=2, где res - это переменная,
в которую вы записываете все действия по расчету сумм. */

/* let salary = 0;
let message = ''; */
/* const value1 = Number(prompt('Enter youur salary'));

console.log(value1);

const value2 = value1 * 1.15;
message = alert(`Prime 15%. On hand ${value2}`);
console.log(value2);

const value3 = value2 - (value2 * 0.10);
message = alert(`Task 10%. On hand after task ${value3}`);
console.log(value3);

const value4 = value3 - 190;
message = alert(`Shop 190. On hand after shop ${value4}`);
console.log(value4);

const value5 = value4/2;
message = alert(`Ffter wife on hand ${value5}`);
console.log(value5); */

/* let value = prompt(`Enter your salary`);

value *= 1.15;
message = alert(`Prime 15%. On hand ${value}`);
console.log(value);

value -= value * 0.10;
message = alert(`Task 10%. On hand after task ${value}`);
console.log(value);

value -= 190;
message = alert(`Shop 190. On hand after shop ${value}`);
console.log(value);

value /= 2;
message = alert(`AFfter wife on hand ${value}`);
console.log(value); */



// Change code below this line
/* const productName = 'Droid';
const pricePerItem = 2000;
console.log(productName);
// 'Droid'

console.log(pricePerItem);
// 2000 */

/* let productName = "Droid";
let pricePerItem = 2000;

// Change code below this line
productName = 'Repair droid';
pricePerItem = 1500; */

/* const topSpeed = 160;
const distance = 617.54;
const login = 'mango935';
const isOnline = true;
const isAdmin = false; */

/* const pricePerItem = 3500;
const orderedQuantity = 4; */

// Change code below this line
/* const totalPrice = pricePerItem * orderedQuantity;
console.log(totalPrice); */

/* const productName = "Droid";
const pricePerItem = 3500; */

// Change code below this line
/* const message = `"You picked ${productName}, price per item is ${pricePerItem} credits"`; */

/* const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;

const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`; */

//Task 7
/* function sayHi() {
    console.log("Hello, this is my first function!");
}

sayHi(); */

//Task11
/* function calculateTotalPrice(orderedQuantity, pricePerItem) {
    // Change code below this line
    const totalPrice = orderedQuantity * pricePerItem;

    // Change code above this line
    return totalPrice;
};

console.log(calculateTotalPrice(5, 100)); */

//Task 12
/* function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
    // Change code below this line
    const message = `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`


    // Change code above this line
    return message;
}
console.log(makeOrderMessage(2, 100, 50)); */

//Task 18
/* function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    let message;
    // Change code below this line
    const totalPrice = pricePerDroid * orderedQuantity;

    if (totalPrice > customerCredits) {
        message = 'Insufficient funds!';
    } else { `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left` }
    // Change code above this line
    return message;
} */

/* function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message;

    if (password === null) { // Change this line
        message = 'Canceled by user!';
    } else if (password === ADMIN_PASSWORD) { // Change this line
        message = 'Welcome!';
    } else {
        message = 'Access denied, wrong password!';
    }

    return message;
}

console.log(checkPassword('jqueryismyjam')); */

/* function checkStorage(available, ordered) {
    let message;
    // Change code below this line
    if (ordered === 0) {
        message = 'There are no products in the order!';
    } else if (ordered > available) {
        message = 'Your order is too large, there are not enough items in stock!';
    } else {
        message = 'The order is accepted, our manager will contact you';
    }
    // Change code above this line
    return message;
}

console.log(checkStorage(100, 50)); */

/* function isNumberInRange(start, end, number) {
    const isInRange = number >= start && number <= end; // Change this line

    return isInRange;
}

console.log(isNumberInRange(10, 30, 17)); */

// function checkForSpam(message) {
//     let result;
//     // Change code below this line

//     // Change code above this line
//     return result;
// }

// const numbers = [2, 5, 7, 10, 14, 15, 78, 3];

// let total = 0;

// // for (const number of numbers) {
// //     if (number % 2 === 0) {
// //         console.log(number);
// //         total += number;
// //     }
// // }

// // console.log('Total:', total);

// for (const number of numbers) {
//     if (number % 2 !== 0) {
//         console.log(`Эту итерацию нужно пропустить ${number}`);
//         continue;
//     }

//     console.log(`Ура четное: ${number}`);
//     total += number;
// }

// console.log(`Total четных: ${total}`);
/* 
const numbers = [3, 5, 7, 2, 14, 15, 78, 10];
let max = numbers[0];

for (const number of numbers) {

    if (max < number) {
        max = number;
    }

}

console.log(max); */

