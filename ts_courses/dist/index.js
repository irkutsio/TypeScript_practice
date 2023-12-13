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
// type User = {
// 	name: string;
// };
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
const fruits = {
    apples: 34,
    bananas: 50,
    tomatoes: 80,
    berries: '6 boxes',
};
const frozen = {
    fish: '4 slices',
    meat: 50,
    greens: 80,
};
// Generics GENERICS
//1
function identify(arg) {
    return arg;
}
let output1 = identify(5);
let output2 = identify('5');
//2
function reverse(arr) {
    return arr.reverse();
}
let strings = reverse(['1', '2', '3', '4']);
let numbers = reverse([1, 2, 3, 4]);
console.log(numbers);
console.log(strings);
//extends | key of
//1
function lengthOfObj(obj) {
    return obj.length;
}
lengthOfObj({ name: 'Earth', length: 10 });
//2
function getLength(str) {
    return str.length;
}
getLength('text');
getLength([1, 2, 3]);
//3
const student = {
    name: 'Max',
    age: 24,
};
function getProperty(obj, key) {
    return obj[key];
}
let studentName = getProperty(student, 'name');
console.log(getProperty(student, 'name'));
function updateToDo(todo, fieldToUpdate) {
    return { ...todo, ...fieldToUpdate };
} //оновити частину - передати лише частину по принципу patch
//A
const toDo1 = {
    title: 'homework',
    description: 'exercises 1-10',
    completed: true,
};
const toDo2 = updateToDo(toDo1, { description: 'learn TypeScript' });
console.log(toDo2);
const userJohn = {
    name: 'John',
    age: 90,
    updateAge(newAge) {
        this.age = newAge;
    },
};
// userJohn.age = 80  --- помилка
userJohn.updateAge(6); // через метод змінило вік
console.log(userJohn);
//2
const numbersArr = [1, 3, 5, 7, 5]; //Для масиву
const dataBase = {
    Kyiv: 23423423,
    Lviv: 2131231213,
    Kherson: 8765474,
};
dataBase.Odesa = 99999999;
const userNew = {
    age: 67,
    hobby: 'reading',
};
function updateUser(obj, field) {
    return { ...obj, ...field };
}
const result = updateUser({ name: 'Ira', age: 23, hobby: 'guitar' }, { age: 87, hobby: 'none' });
console.log(result);
function readOnlyArr(arr) {
    // return arr.map(num => num + 1) // творюэ новий масив, працюэ
    return arr;
}
console.log(readOnlyArr([3, 4, 5, 6]));
// 3. Pick<T, K>
// Задача 1: У вас є об'єкт користувача і вам потрібно створити функцію, яка повертає лише ім'я та електронну пошту користувача.
function pickedUser(obj) {
    return obj;
}
console.log(pickedUser({
    name: 'ira',
    email: 'qwe@qwe.com',
}));
const users = {
    Max: 45,
    Ira: 23,
    Anton: 18,
};
const calendar = {
    December: 31,
    January: 31,
    February: 28 | 29,
    March: 31,
};
const restaurantMenu = [
    { title: 'Caesar Salad', price: 12.99, category: 'appetizer' },
    { title: 'Spaghetti Bolognese', price: 16.99, category: 'mainCourse' },
    { title: 'Cheesecake', price: 8.99, category: 'dessert' },
];
function filteredMenu(menu, category) {
    return menu.filter(item => item.category === category);
}
console.log(filteredMenu(restaurantMenu, 'dessert'));
function checkAge(obj) {
    const currentDate = new Date();
    const userBirthDate = obj.birthDate;
    if (currentDate.getFullYear() - userBirthDate.year < 18) {
        console.log('User is not adult.');
        return false;
    }
    console.log('User is adult.');
    return true;
}
checkAge({ name: 'qwe', email: 'qwerty#qwe.com', birthDate: { year: 2007, month: 4, date: 18 } });
// Робота з класами
// Спроєктуйте інтерфейс CarProperties з такими характеристиками, як brand, year та fuelType.
// Створіть клас Car, який реалізує цей інтерфейс і має метод getDetails(), що виводить інформацію про автомобіль.
// Спроєктуйте інтерфейс StudentData з полями name, studentID та major.
// Створіть клас Student, який реалізує цей інтерфейс і має метод introduce(), де студент представляється.
//# sourceMappingURL=index.js.map