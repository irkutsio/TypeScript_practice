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

// type User = {
// 	name: string;
// };

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
	role?: string;
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

//index properties

//1
// type StringDictionary = {
// 	[key: string]: number; //універсальний шаблон
// };

// const fruits: StringDictionary = {
// 	apples: 34,
// 	bananas: 50,
// 	tomatoes: 80,
// 	berries: 67,
// };

// const frozen: StringDictionary = {
// 	fish: 34,
// 	meat: 50,
// 	greens: 80,
// };

//2
type MixedType = {
	[key: string]: number | string; //універсальний шаблон
};

const fruits: MixedType = {
	apples: 34,
	bananas: 50,
	tomatoes: 80,
	berries: '6 boxes',
};

const frozen: MixedType = {
	fish: '4 slices',
	meat: 50,
	greens: 80,
};

// Generics GENERICS
//1
function identify<T>(arg: T): T {
	return arg;
}

let output1 = identify<number>(5);
let output2 = identify<string>('5');

//2
function reverse<T>(arr: T[]): T[] {
	return arr.reverse();
}

let strings = reverse<string>(['1', '2', '3', '4']);
let numbers = reverse<number>([1, 2, 3, 4]);
console.log(numbers);
console.log(strings);

//extends | key of
//1
function lengthOfObj<T extends { length: number }>(obj: T): number {
	return obj.length;
}

lengthOfObj({ name: 'Earth', length: 10 });

//2

function getLength<T extends { length: number }>(str: T): number {
	return str.length;
}

getLength('text');
getLength([1, 2, 3]);

//3
const student = {
	name: 'Max',
	age: 24,
};

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
	return obj[key];
}

let studentName = getProperty(student, 'name');

console.log(getProperty(student, 'name'));
// console.log(getProperty(student, 'adress')); // помилка

// partial
//1
type ToDo = {
	title: string;
	description: string;
	completed: boolean;
};

function updateToDo(todo: ToDo, fieldToUpdate: Partial<ToDo>): ToDo {
	return { ...todo, ...fieldToUpdate };
} //оновити частину - передати лише частину по принципу patch

//A
const toDo1: ToDo = {
	title: 'homework',
	description: 'exercises 1-10',
	completed: true,
};

const toDo2 = updateToDo(toDo1, { description: 'learn TypeScript' });
console.log(toDo2);

//B
// const toDo1: ToDo = {
// 	title: 'homework',
// 	description: 'exercises 1-10',
// 	completed: true,
// };
// const toDo2 = {
// 	description: 'learn TypeScript'
// 	number : 8, //Помилка
// };
// console.log(updateToDo(toDo1, toDo2)); //{title: 'homework', description: 'learn TypeScript', completed: true}

//READONLY
//1
type User = {
	name: string;
	age: number;
	updateAge: (newAge: number) => void;
};

const userJohn: Readonly<User> = {
	name: 'John',
	age: 90,
	updateAge(this: User, newAge: number) {
		this.age = newAge;
	},
};

// userJohn.age = 80  --- помилка
userJohn.updateAge(6); // через метод змінило вік
console.log(userJohn);

//2
const numbersArr: ReadonlyArray<number> = [1, 3, 5, 7, 5]; //Для масиву
// numbersArr.push(8) ---помилка
// numbersArr[0] = 6  ---помилка

//
//PICK відбір вибір
type Person = {
	name: string;
	age: number;
	address: string;
};
type Picked = Pick<Person, 'name' | 'age'>; //перевикористання, не створюєш новий тип

//
//Omit не включати
type Person1 = {
	name: string;
	age: number;
	address: string;
};
type Omit1 = Omit<Person, 'name'>; //новий тип крім ключа Name

//
//Record                    key     value
type CityDatabase = Record<string, number>;
const dataBase: CityDatabase = {
	Kyiv: 23423423,
	Lviv: 2131231213,
	Kherson: 8765474,
};
dataBase.Odesa = 99999999;

// interface

// interface Person {
//   firstName: string;
//   lastName: string;
//   getFullName(): string;
// }

// const john: Person = {
//   firstName: "John",
//   lastName: "Doe",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// interface Movable {
//   speed: number;
//   move(): void;
// }

// class Car implements Movable {
//   speed: number;

//   constructor(speed: number) {
//     this.speed = speed;
//   }

//   move() {
//     console.log(`Car is moving at ${this.speed} km/h.`);
//   }
// }

// interface Example {
//   mandatoryProp: string;
//   optionalProp?: string;
// }

// interface Example {
//   readonly fixedProp: string;
// }

// interface Parent {
//   prop1: string;
// }

// interface Child extends Parent {
//   prop2: string;
// }

// Partial<T>

// Задача 1: Уявімо, що у вас є форма редагування профілю користувача.
// Користувач може вибирати, які поля він хоче оновити.Створіть тип для такої форми на основі існуючого типу User.
type myUser = {
	name: string;
	age: number;
	hobby: string;
};

type myUserUpdate = Partial<myUser>;

const userNew: myUserUpdate = {
	age: 67,
	hobby: 'reading',
};

//   Задача 2: У вас є конфігураційний об'єкт з декількома полями.
// Створіть функцію, яка приймає часткові налаштування та повертає повний конфігураційний об'єкт.

type myUser1 = {
	name: string;
	age: number;
	hobby: string;
};

function updateUser(obj: myUser1, field: Partial<myUser>) {
	return { ...obj, ...field };
}
const result = updateUser({ name: 'Ira', age: 23, hobby: 'guitar' }, { age: 87, hobby: 'none' });
console.log(result);

// Readonly<T>

// Задача 1: Ви розробляєте функцію, яка приймає масив чисел і повертає його ж,
//   але ви хочете гарантувати, що функція не змінює вхідний масив.

type MyReadonlyArr = number[];

function readOnlyArr(arr: Readonly<MyReadonlyArr>) {
	// return arr.map(num => num + 1) // творюэ новий масив, працюэ
	return arr;
}

console.log(readOnlyArr([3, 4, 5, 6]));

// Задача 2: Створіть об'єкт конфігурації, який не можна змінювати після його створення.

type myUser2 = {
	name: string;
	age: number;
	hobby: string;
	email: string;
	password: string;
	date: Date;
};

type readonlyUser = Readonly<myUser2>;

// 3. Pick<T, K>

// Задача 1: У вас є об'єкт користувача і вам потрібно створити функцію, яка повертає лише ім'я та електронну пошту користувача.
function pickedUser(obj: Pick<myUser2, 'name' | 'email'>) {
	return obj;
}
console.log(
	pickedUser({
		name: 'ira',
		email: 'qwe@qwe.com',
	})
);

// Задача 2: Ви хочете зберегти тільки певні поля з API-відповіді для відображення в UI.

type Date = Pick<myUser2, 'age' | 'name'>;

// 4. Record<K, T>

// Задача 1: Ви хочете створити об'єкт, який мапить імена користувачів до їх віку.
type Users = Record<string, number>;
const users: Users = {
	Max: 45,
	Ira: 23,
	Anton: 18,
};

// Задача 2: Мапа з іменами місяців до кількості днів у них.

type Calendar = Record<string, number>;
const calendar: Calendar = {
	December: 31,
	January: 31,
	February: 28 | 29,
	March: 31,
};

// 5. Omit<T, K>

// Задача 1: У вас є тип користувача, але ви хочете створити новий тип без поля пароля для відправлення даних на клієнтську сторону.
type omitUser = Omit<myUser2, 'password'>;
//Задача 2: Ви хочете створити новий тип на основі API-відповіді, але без дати створення.
type omitUserDate = Omit<myUser2, 'date'>;
// Робота з інтерфейсами

// Спроєктуйте інтерфейс для ресторанного меню.
// Він повинен містити поля: назва, ціна, категорія(наприклад, закуска, основна страва, десерт).
// Розробіть функцію, яка приймає список страв і фільтрує їх за категорією.

interface RestaurantMenu {
	title: string;
	price: number;
	category: 'appetizer' | 'mainCourse' | 'dessert';
}

const restaurantMenu: RestaurantMenu[] = [
	{ title: 'Caesar Salad', price: 12.99, category: 'appetizer' },
	{ title: 'Spaghetti Bolognese', price: 16.99, category: 'mainCourse' },
	{ title: 'Cheesecake', price: 8.99, category: 'dessert' },
];

function filteredMenu(menu: RestaurantMenu[], category: 'appetizer' | 'mainCourse' | 'dessert') {
	return menu.filter(item => item.category === category);
}

console.log(filteredMenu(restaurantMenu, 'dessert'));

// Спроєктуйте інтерфейс для користувача з полями ім'я, email та дата народження.
// Після цього створіть функцію, яка перевіряє, чи є користувач повнолітнім.
interface UserAgain {
	name: string;
	email: string;
	birthDate: { year: number; month: number; date: number };
}

function checkAge(obj: UserAgain) {
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
