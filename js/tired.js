// Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.

console.log("Завдання 1");

const numbers = [1, 2, 3]
numbers[1] = 10;

console.log(numbers);



// Створити масив із трьох рядків.Додати до масиву ще одну рядків.
console.log("Завдання 2");

const schedule = ["Foreign Literature", "English", "History"];
schedule[3] = "Extra Physical Education Lesson"
schedule[4] = "Extra History Lesson"
 console.log(schedule);
 



// Створити скрипт який поверне суму всіх чисел в масиві.
console.log("Завдання 3");

const list = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < list.length; i += 1) {
    sum += list[i];
}

console.log(sum); 




// Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.
console.log("Завдання 4");

const num = [10, 20, 30, 40, 50];

for (let i = 0; i < num.length; i +=1) {
    console.log(num[i]);
}


// Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.
// console.log("Завдання 5");

const words = ["я", "втомлена", "та", "спатоньки", "бачить сон"];

for (let i = 0; i < words.length; i += 1) {
    if (words[i].length > 5) {
        console.log(words[i]);
    }
}



// Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.
console.log("Завдання 6");

const numbs = [67, 30, 11, 777, 55, 666, 47, 99, 33, 12];

let max = numbs[0];

for (let i = 1; i < numbs.length; i += 1) {
    if (numbs[i] > max) {
        max = numbs[i];
    }
}

console.log(max);


// Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.
console.log("Завдання 7");

const coolList = [3, 7, 12, 5, 9, 1, 15, 8, 4, 10];

for (let i = 0; i < coolList.length; i += 1) {
    if (i % 3 === 0) {
        continue
    }
    console.log(i);
    
}