import { concatenation } from './concatenation';
const button = document.querySelector('button');
const input = document.querySelector('input');
if (button && input) {
    button.addEventListener('click', () => {
        concatenation(input.value, 'hello!');
    });
}
let total = 100;
let name = 'Max';
let isActiv = false;
let empty = null;
let quantity = undefined; //явна типізіція
name = '5';
let age = 12;
const test = 'type';
const btn = 'large';
var Sizes;
(function (Sizes) {
    Sizes["small"] = "small";
    Sizes["medium"] = "medium";
    Sizes["large"] = "large";
})(Sizes || (Sizes = {}));
const btn2 = Sizes.medium;
function add(num, num2) {
    return num + num2;
} // 58
function add2(num, num2) {
    return `${num}${num2}`; // 256
}
console.log(add(2, 56));
console.log(add2(2, 56));
function add3(num, num2) {
    console.log(num + num2); // якщо нічого не повертаємо
}
add3(2, 56);
function greeting(user) {
    console.log(`Hello ${user.name}`);
}
function userConstructor(name, age, hobby) {
    return { name, age, hobby };
}
console.log(userConstructor('NIl', 34, 'tennis'));
const Car = {
    color: 'red',
    price: 30000,
    currency: 'USD',
    start(word) {
        console.log('Start!' + ' ' + word + ' ' + this.color);
    },
};
Car.start('Hello');
const user7 = {
    name: 'Qwe',
    age: 34,
};
const user8 = {
    name: 'Opp',
    age: 23,
    role: 'admin',
};
//# sourceMappingURL=index.js.map