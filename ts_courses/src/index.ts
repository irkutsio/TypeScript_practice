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

type User = { name: string; age: number };

const user: User = {
	name: 'max',
	age: 12,
};
