// Задание 3  Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".
function reverseString(str) {
    const splitHello = str.split("");
    const reversHello = splitHello.reverse();
    const joinHello = reversHello.join("");
    return joinHello;
  }
  console.log(reverseString("ПРИВЕТ МИР КАК ДЕЛА"));