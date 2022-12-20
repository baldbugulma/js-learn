// Функции


function logName(name, surname){
    console.log(`Мое имя ${name} ${surname}`);
}

logName('Костя', 'Лох');

function countDepositSum(depositInUSD, month, rate){
    const sum = depositInUSD * (1 + rate / 12) ** month;
    return sum;
}

const example1 = countDepositSum(1000, 24, 0.12);
console.log(example1)