//Шаблоные строки

const projectName = 'cайт магазина';
const price = 2000;
const author = 'Василий Пупкин';

const template = author + ' заказал ' + projectName + ' по цене '+ price;

console.log(template)

const template2 = `${author}
заказал ${projectName} по цене ${price}$`;

console.log(template2)

