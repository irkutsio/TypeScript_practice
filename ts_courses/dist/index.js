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
const user = {
    name: 'max',
    age: 12,
};
//# sourceMappingURL=index.js.map