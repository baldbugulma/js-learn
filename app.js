
// Васи положил 12 000$ на вклад 7% годовых с капитализацией 1 раз в месяц. Вывести в консоль, сможет ли он купить дом за 13 500$ через 2 года после снятия вклада. И остаток после покупки.
// Итог = Сумма * (1 + Ставка в месяц не в %) ^ срок в месяцах

const role = 'CEO';

switch(role){
    case 'manager':
        console.log('Менеджер');
        break;
    case 'admin':
        console.log('Админ');
        break;
    case 'CEO':
        console.log('CEО');
        break;
    default:
        console.log('Мы тебя не знаем'); 
}

switch(role){
    case 'manager':
    case 'admin':
        console.log('Не руководитель');
        break;
    case 'CEO':
        console.log('CEО');
        break;
    default:
        console.log('Мы тебя не знаем'); 
}

const num = 1;

switch(true){
    case num>0: // true === num > 0
        console.log ("Положительный")
        break;
    case num<0:
        console.log ("Отрицательный")
        break;
    default:
        console.log ("Ноль")
}
