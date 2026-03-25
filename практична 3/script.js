//завдання 1
const numbers = [5, 8, 2, 10, 3];

const average = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

const max = Math.max(...numbers);
const min = Math.min(...numbers);

const sorted = [...numbers].sort((a, b) => a - b);

console.log("Середнє:", average);
console.log("Максимум:", max);
console.log("Мінімум:", min);
console.log("Відсортований:", sorted);



//завдання 2
const users = [
  { name: "Макс", age: 20 },
  { name: "Свєта", age: 17 },
  { name: "Олег", age: 25 }
];

const adults = users.filter(user => user.age > 18);

const names = users.map(user => user.name);

const avgAge = users.reduce((sum, user) => sum + user.age, 0) / users.length;

console.log("Повнолітні:", adults);
console.log("Імена:", names);
console.log("Середній вік:", avgAge);

//завдання 3
const products = [
  { name: "Телефон", category: "Електроніка" },
  { name: "Ноутбук", category: "Електроніка" },
  { name: "Молоко", category: "Продукти" }
];

const grouped = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }
  acc[product.category].push(product.name);
  return acc;
}, {});

console.log(grouped);




//завдання 4
const students = {
  Артем: { math: 80, physics: 95, english: 98 },
  Вікторія: { math: 95, physics: 92, english: 90 }
};

for (let student in students) {
  const grades = Object.values(students[student]);
  const avg = grades.reduce((sum, g) => sum + g, 0) / grades.length;

  console.log(`${student}: середній бал = ${avg}`);
}

//завдання 5
const name = ["Іван", "Марія", "Олег"];

const result = {};

for (let i = 0; i < names.length; i++) {
  result[names[i]] = names[i].length;
}

console.log(result);