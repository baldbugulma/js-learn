// Пользователь:
// Возраст
// Наличие работы
// Деньги
// Нужно проверить может ли он купить новый MacBook за 2000$? Он может брать не только свои деньги, но и взять кредит. Ему дадут 500$, только если ему больше 24-х лет и он имеет работу, 100$ если ему просто больше 24-х лет и 0 в ином случае. Напишите функцию, которая принимает данные пользователя и товара и возвращает true или false.

function getCredit(years, work = false){
    let CreditMoney = 0;
    if (years>24 && work == true)
    {
        return CreditMoney = 500;
    } else if (years>24 && work == false) {
        return CreditMoney = 100;
    } else {
        return CreditMoney;
    }
}


function buyMacBook(years, work, money) {
    if (money>=2000){
        return true;
    } else {
        let resultMoney = getCredit(years, work)
        if (Number(resultMoney) + Number(money) >= 2000){
            return true;
        } else {
            return false;
        }
    }
}

console.log(buyMacBook(25, false, 1800));