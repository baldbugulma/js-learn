function canAccessWebSite(age){
    if (age<18){
        return false;
    } 
    return true;  
}

console.log(canAccessWebSite(18))

const canAccessWebSite2 = age => age < 18 ? 'Нет' : 'Да';

console.log(canAccessWebSite2(18))