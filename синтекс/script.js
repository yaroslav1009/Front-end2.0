// var x = myFunction(4, 3);
// document.getElementById("demo").innerHTML = x;

// function myFunction(a, b) {
//     return a + b;
// }
// console.log(myFunction);
// console.log(x);

// ------------циклы и массивы (delete)
// var arr = [1, 2, 3];
// delete arr[1];
// console.log(arr);
// console.log(arr[1]);

// -------------splice
// Метод arr.splice(str) – это универсальный «швейцарский нож» для работы с массивами. Умеет всё: добавлять, удалять и заменять элементы.

// var arr = ["Я", "Изучаю", "JS"];
// arr.splice(2,1);
// console.log(arr);

// var arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// arr.splice(0, 3, "Давай", "танцевать");
// console.log(arr);

// var arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// let removed = arr.splice(0, 2);
// console.log( removed );


// let arr = ["Я", "изучаю", "JavaScript"];
// arr.splice(2, 0, "сложный", "язык");
// console.log( arr );

// let arr = [1, 2, 5];
// arr.splice(-1, 0, 3, 4);
// console.log( arr ); 

// ----------------slice----arr.slice([start], [end])
// Он возвращает новый массив, в который копирует элементы, начиная с индекса start и до end (не включая end). Оба индекса start и end могут быть отрицательными. В таком случае отсчёт будет осуществляться с конца массива.

// let arr = ["t", "e", "s", "t"];
// console.log( arr.slice(1, 2) ); 
// console.log( arr.slice(-2) ); 

// -------------concat-------------
// Метод arr.concat создаёт новый массив, в который копирует данные из других массивов и дополнительные значения.

// let arr = [1, 2];
// console.log( arr.concat([3, 4]) );
// console.log( arr.concat([3, 4], [5, 6]) );
// console.log( arr.concat([3, 4], 5, 6) ); 

// let arr = [1, 2];
// let arrayLike = {
//   0: "что-то",
//   length: 1
// };
// console.log( arr.concat(arrayLike) ); 

// let arr = [1, 2];
// let arrayLike = {
//   0: "что-то",
//   1: "ещё",
//   [Symbol.isConcatSpreadable]: true,
//   length: 2
// };
// console.log( arr.concat(arrayLike) ); 

// --------------forEach---------
// Метод arr.forEach позволяет запускать функцию для каждого элемента массива.

// ["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//     console.log(`${item} имеет позицию ${index} в ${array}`);
//   });

// ---------------indexOf/lastIndexOf и includes---------

// let arr = [1, 0, false];
// console.log( arr.indexOf(0) ); 
// console.log( arr.indexOf(false) ); 
// console.log( arr.indexOf(null) ); 
// console.log( arr.includes(1 )); 

// const arr = [NaN];
// console.log( arr.indexOf(NaN) ); 
// console.log( arr.includes(NaN) );

// -----------find/findlndex------------
// Представьте, что у нас есть массив объектов. Как нам найти объект с определённым условием?
// item – очередной элемент.
// index – его индекс.
// array – сам массив.

// let users = [
//     {id: 1, name: "Вася"},
//     {id: 2, name: "Петя"},
//     {id: 3, name: "Маша"}
//   ];
//   let user = users.find(item => item.id == 4);
//   console.log(user.name); 

// -----------------filter-------------
// Метод find ищет один (первый попавшийся) элемент, на котором функция-колбэк вернёт true.

// let users = [
//     {id: 1, name: "Вася"},
//     {id: 2, name: "Петя"},
//     {id: 3, name: "Маша"}
//   ];
//   let someUsers = users.filter(item => item.id < 3);
//   console.log(someUsers.length);

// --------------map-----------
// Метод arr.map является одним из наиболее полезных и часто используемых.
// Он вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции.
// Например, здесь мы преобразуем каждый элемент в его длину:

// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
// console.log(lengths);


