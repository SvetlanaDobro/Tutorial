//let greetingsForUsers = "Hello my user!"

//alert(greetingsForUsers);
//alert(greetingsForUsers);
//alert(greetingsForUsers);
//alert(greetingsForUsers);
//alert(greetingsForUsers);

//console.log(greetingsForUsers)

//String
const gritings = 'hello world';
console.log(typeof gritings);

//Number
const num = 100;
console.log(typeof num);

// Boolean
const boolTrue = true;
const boolFalse = false;
console.log(typeof boolTrue);
console.log(typeof boolFalse);


// Null
const someNullValue = null;
console.log(someNullValue);
let userImg = null;

//undefined
const someUndefinedValue = undefined;
console.log(someUndefinedValue);

//Object
const obj = {
    name: 'Svitlana',
    age: 39,
    hobby: 'football',
    gender: 'male',
};
console.log(obj);


const isUserLoggedIn = true;
//if (isUserLoggedIn) {
 //   alert("You are logged in!");
//}

//const isUserLoggedIn = false;
//if (isUserLoggedIn) {
  //  alert("You are logged in!");
//} else {
 //   alert("You are not logged in!");
//}
// isUserLoggedIn ? alert("You are logged in!") : alert("You are not logged in!");

// const age = 30;
// switch (age) {
//     case 10:
//         alert("Happy birthay, give me a kiss!");
//         break;
//     case 20:
//         alert("Happy birthay, give me a hug");
//         break;
//     case 30:
//         alert("Happy birthay, give me grandchildren!");
//         break;
//     default:
//         alert("Happy birthay, give me your legacy");
// }

// const name = "Svitlana";

// if (age === 30 && name === "Svitlana" && isUserLoggedIn) {
//     alert("Congrats");
// }

// function createUserName() {
  
//     return 'Svitlana';
// }
// const userName = createUserName();
// console.log(userName);


// function createUserNameSv(name) {
//     constresult = 'hello'.toUpperCase;
//     return
// }
// console.log(createUserNameSv());





const userName = 'Svitlana';

function createUserName(name) {
    return name.toUpperCase();
    
}
console.log(createUserName(userName));

console.log(0 || ('0' && {}));