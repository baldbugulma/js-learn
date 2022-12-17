// Тернарные операторы

const bmmX3Price = 100000;
const fordFocusPrice = 10000;
const budget = 200000;

let message;
if(budget > 100000) {
    message = 'bmw';
} else if (budget > fordFocusPrice)  {
    message = 'Ford';
} else {
    message = 'Велосипед';
}

console.log(`Я хочу купить ${message}`);


const str = 10 > 0 ? 'Больше 0' : 'Не больше';

console.log(str);


message = budget > bmmX3Price ? 'bmw X3' : budget > fordFocusPrice ? 'Ford' : 'Велосипед'; 
console.log(`Я хочу купить ${message}`);
