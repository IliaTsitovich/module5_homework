// Задание 8 Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

let myPro = new Map();
myPro.set(1, 'это один');
myPro.set(2, 'это two');
myPro.set(3, 'это three');
for (let x of myPro.keys()){
  console.log(`Ключи - ${x}`)
}
for (let y of myPro.values()){
  console.log(`Значение - ${y}`)
}