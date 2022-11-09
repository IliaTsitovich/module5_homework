// Задание 2 Дана переменная x, которая может принимать любое значение. Написать программу, которая в зависимости от типа данных x выводит в консоль сообщение вида: «x — число».

const x = null;
console.log(typeof x);
switch(typeof x) {
    case "number":
      console.log (x + ' число ');
      break;
    case "string":
      console.log (x + ' строка');
      break;
    case "boolean":
      console.log (x + ' логический тип ');
      break;
    default:
    console.log ("Тип не определен");
}