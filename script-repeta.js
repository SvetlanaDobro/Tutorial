
// const shouldRenew = confirm('Хотите продлить подписку?');
// console.log(shouldRenew);

// const quantity = prompt('Введите количество товара');
// console.log(quantity);


// let elementWidth = '50px';
// const result = Number.parseInt(elementWidth);
// console.log(result);

// let elementHeight = '200.74px';
// elementHeight = Number.parseFloat(elementHeight);
// console.log('elementHeight: ', elementHeight);


// let salary = 1300.16478;
// salary = salary.toFixed(4);
// salary = Number(salary);
// console.log(salary);


// let base = prompt('Давай число');
// base = Number(base);
// console.log(base)
// let power = prompt('Давай степень')
// power = Number(power);
// console.log(power);
// const resultPow = base ** power;
// console.log(resultPow);



const max = 60;
const min = 20;
console.log(Math.round(Math.random() * (max - min) + min));



const quantityMar = 5;
const orderMsg = `Вы заказывали ${quantityMar} холодильников.`;
console.log(orderMsg);


const x1 = 10;
const x2 = 30;
const numberRez = 50;
console.log(`Число ${numberRez} попадает в отрезок до ${x1}?`, numberRez < x1);


if (5 > 30) {
    console.log('x>y');
} else { 
    console.log('x<y');
}


// for (let i = 0; i <= 10; i += 1) {
//     console.log(i);
// }
// console.log('wse');


const minSalary = 500;
const maxSalary = 5000;
const employees = 4;
let totalSalary = 0;
for (let i = 1; i <= employees; i += 1) {
    const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
    console.log(`ЗП работника номер ${i} - ${salary}`);
    totalSalary += salary;
}
console.log('totalSalary:', totalSalary);


// let a = 6;
// let b = false;
// let c = "12";
// let d = 1;
// let result = a + d + c + b;
// console.log(result);


console.log(10 % 3);

// const country = 'China';

// function getShippingCost(country) {
//   let message;
//   // Change code below this line
// switch (country) {
//   case 'China':
//     message = 'Shipping to China will cost 100 credits';
//     break;
//   case 'Chile':
//     message = 'Shipping to Chile will cost 250 credits';
//     break;
//   case  'Australia':
//     message = 'Shipping to Australia will cost 170 credits';
//     break;
//   case 'Jamaica':
//     message = 'Shipping to Jamaica will cost 120 credits';
//     break;
//   default:
//     message = 'Sorry, there is no delivery to your country';
// }
//   // Change code above this line
//   return message;
// }
// console.log(getShippingCost(country));




// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// const substring = 'Hello world';

// function getSubstring(string, length) {
//   const substring = getSubstring.slice; // Change this line

//   return substring;
// }
// console.log(getSubstring((substring));



// const message = 'Curabitur ligula sapien';
// const maxLength = 10;

// function formatMessage(message, maxLength) {

//   result = message.length > maxLength ? message.slice(0, maxLength) + "..." : message;
//   return result;
// }
// console.log(result);



const message = ' How to earn Sale fast money?'
const result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale');
console.log(result);
