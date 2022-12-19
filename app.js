// Логические операторы

let balance = 10;
let bonusBalance = 110;
let isBaned = true;
let isExist = false;
let isSelling = true;

if ((balance > 1000 || bonusBalance > 100) && (isBaned == false && isExist == false && isSelling == true)) 
{
    console.log('Можешь купить игру')
} else {
    console.log('Не можешь купить игру')
}
