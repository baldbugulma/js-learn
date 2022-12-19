// Логические операторы

const isAdmin = true;
const canWrite = true;

console.log(`Системный файл ${isAdmin && canWrite}`);
console.log(`Обычный файл ${isAdmin || canWrite}`);
console.log(`Инвертировать права админа ${!isAdmin}`);

const isEdit = true;

console.log(`Файл с редактированием ${isAdmin && canWrite && !isEdit}`);