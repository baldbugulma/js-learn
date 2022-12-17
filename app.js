
// Васи положил 12 000$ на вклад 7% годовых с капитализацией 1 раз в месяц. Вывести в консоль, сможет ли он купить дом за 13 500$ через 2 года после снятия вклада. И остаток после покупки.
// Итог = Сумма * (1 + Ставка в месяц не в %) ^ срок в месяцах

let deposit = 12000;
let percentYear = 0.07;
let depositTerm = 24;

let total = deposit*(1 + percentYear/12)**24;
let accountBalance = total - 13500;

const template = `Может купить дом за 13500$
Останется после покупки ${accountBalance}$`;
const template2 = `Не может купить дом`;

if (total >= 13500){
    console.log(template);
} else {
    console.log(template2)
}

