// Упражнение - Проверка робота

let test = prompt("Сколько буде 7+ или -15?");

switch(test.toLowerCase()){
    case '23':
    case '-8':
    case 'я не робот':
        console.log("Вы не робот");
        break;
    default:
        console.log("Вы робот");
}


