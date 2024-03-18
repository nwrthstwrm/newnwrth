let name = "Лера";
console.log('Задача 1');
console.log(`Привет, ${name}`);

function isEven (number) {
    if (number / 2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log('Задача 2');
console.log(isEven(3));

let person = {
    name: "Лера",
    age: 18,
    city: "Великий Новгород"
};

console.log('Задача 3');
console.log(`Меня зовут ${person.name}. Мне ${person.age} лет. Я живу в городе ${person.city}`);

let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log('Задача 4');
console.log(sum);

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log('Задача 5');
console.log(factorial(10));