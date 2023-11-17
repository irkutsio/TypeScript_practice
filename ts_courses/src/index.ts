import { concatenation } from './concatenation';

const button = document.querySelector('button')!;
const input = document.querySelector('input')!;

if (button && input) {
	button.addEventListener('click', () => {
		concatenation(input.value, 'hello!');
	});
}

let total: number = 100;
let name: string = 'Max';
let isActiv: boolean = false;
let empty: null = null;
let quantity: undefined = undefined; //явна типізіція

name = '5';

let age = 12;

// age = '23' // не явна типізація

// const numbers: number[] = [1, 2, 3, 4, 5];
// numbers.push('23')

// const obj: {
// 	name: string;
// 	age: number;
// } = {
// 	name: 'max',
// 	age: 12,
// };

// obj.age = true // помилка

// type User = { name: string; age: number | string }; // оператор або |

// const user: User = {
// 	name: 'max',
// 	age: '12',
// };

type myType = 'type' | 'srt' | 'num';

const test: myType = 'type';

// any / unknown /enum

type sizes = 'small' | 'medium' | 'large';

const btn: sizes = 'large';

enum Sizes {
	small = 'small',
	medium = 'medium',
	large = 'large',
}

const btn2: Sizes = Sizes.medium;

function add(num: number, num2: number): number {
	return num + num2;
} // 58

function add2(num: number, num2: number): string {
	return `${num}${num2}`; // 256
}

console.log(add(2, 56));
console.log(add2(2, 56));

function add3(num: number, num2: number): void {
	console.log(num + num2); // якщо нічого не повертаємо
}
add3(2, 56);

type User = {
	name: string;
};

function greeting(user: User): void {
	console.log(`Hello ${user.name}`);
}

type newUser = {
	name: string;
	age: number;
	hobby: string;
};

function userConstructor(name: string, age: number, hobby: string): newUser {
	return { name, age, hobby };
}

console.log(userConstructor('NIl', 34, 'tennis'));

type Car = {
	color: string;
	price: number;
	currency: string;
	// start: (word: string) => {};
};

const Car = {
	color: 'red',
	price: 30000,
	currency: 'USD',
	start(word: string) {
		console.log('Start!' + ' ' + word + ' ' + this.color);
	},
};

Car.start('Hello');

//////////////////////////////

type User78 = {
	name: string;
	age: number;
	role? : string
};

const user7: User78 = {
	name: 'Qwe',
	age: 34,
};

const user8: User78 = {
	name: 'Opp',
	age: 23,
	role: 'admin',
};
