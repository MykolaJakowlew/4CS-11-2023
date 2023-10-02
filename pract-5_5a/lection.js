/**
 * let -- змінна,яка може набувати різних значень
 * const -- змінна, яка не міняє своє значення
 * var -- створкення глобальної змнної
 */

let a = 45;
a = 56;
a = "123213";
a = "sdfmksd fsdlk nlsdfn";

const b = "123";
// b = 56; -> error

console.log(a, b, "sdfsdf "/*, ...*/);
// console.error(a, b, "sdfsdf "/*, ...*/);
// console.debug(a, b, "sdfsdf "/*, ...*/);
// console.warn(a, b, "sdfsdf "/*, ...*/);

34 + 56; // => number
"123" + "asdas"; // => string
"2" + 6; // => string("26")
let c = "12345";
let d = parseInt(c);
d = +c;
c = "abcsd";
d = +c; // => NaN -- not a number
isNaN(d); // => true | false -- перевірити чи це значення є числовим

// boolean -- true | false

let h = [12, "qwe", true];

let x1 = 123;
{
 let x1 = 45;
 console.log('x1:', x1); // => x1: 45
}
console.log('x1:', x1); // => x1: 123


let arr = [123, 23, 45, 67];
// let sum = ?

// let sum = 0;
// for (let i = 0; i < arr.length; i += 1) {
//  sum += arr[i]; // sum = sum + arr[i]
// }
// console.log('sum:', sum);

// let sum = 0;
// for (const el of arr) {
//  sum += el;
// }
// console.log('sum:', sum);

// let sum = 0;
// arr.forEach(el => {
//  sum += el;
// });
// console.log('sum:', sum);

// /**
//  * arr = [123, 23, 45, 67];
//  */
// let sum = arr.reduce((accumulate, current) => {
//  accumulate += current;
//  return accumulate;
// }, 0);
// /**
//  * 1. (accumulate = 0, current = 123) => 123
//  * 2. (accumulate = 123, current = 23) = > 146
//  * 3. (accumulate = 146, current = 45) = > 191
//  * 4. (accumulate = 191, current = 67) = > 258
//  * 5. sum = > 258
//  */
// console.log('sum:', sum);


{
 // let sum_odd = 0;
 // let sum_even = 0;
 let sum_odd = 0, sum_even = 0;
 let arr = [12, 3, 4, 5, 6, 7, 4, 44, 5, 6];
 for (const el of arr) {
  // if (<condition>)
  if (el % 2 == 0) {
   sum_even += el;
  } else {
   sum_odd += el;
  }
 }

 console.log(`sum_odd: ${sum_odd}`);
 console.log('sum_even:', sum_even);
}

{
 /**
  * Порахувати сумм елементів менших за 7
  */
 let sum_odd = 0, sum_even = 0;
 let arr = [12, 3, 4, 5, 6, 7, 4, 44, 5, 6];
 let lessThan7 = arr.filter((el) => el < 7); // => [3, 4, 5, 6, 4, 5, 6]
 // for (const el of arr.filter((el) => el < 7)) {
 for (const el of lessThan7) {
  /**
   * if (el < 7 && el % 2 == 0) -- && -- логічне і, обидві умови маються виконуватися
   * if (el < 7 || el % 2 == 0) -- || -- логічне або,хоча б одна з умови має виконуватися
   */
  // if (el < 7) {
  if (el % 2 == 0) {
   sum_even += el;
  } else {
   sum_odd += el;
  }
  // }
 }

 console.log(`sum_odd: ${sum_odd}`);
 console.log('sum_even:', sum_even);
}

{
 let a = [];
 a.push(45); // => [45]
 a.push(23, 34, 56); // => [45,23, 34, 56]
 let b = a.pop(); // => b =56, [45,23, 34]
 a[1] = -89; // -> [45,-89, 34]
 a.reverse(); // -> [34, -89, 45]
}

{
 /**
  * Змінити кожен не парний елемент на від'ємне значення
  * [1,23,4,5] => [-1,-23,4,-5]
  */

 let a = [1, 23, 4, 5];
 let b = a.map((el) => {
  // if (el % 2 == 0) {
  //  return el;
  // }
  // return -el;
  /**
   * <condition 1> && || <condition 2> ? todo if true : todo if false
   */
  return el % 2 ? -el : el;
 });

 // a => [1, 23, 4, 5]
 // b => [-1,-23,4,-5]
}

/**
 * function -- створити функцію
 * fun1 -- назва функції
 * { ... } -- тіло функції
 */
function func1 () {
 function func2 () {
  console.log('this is function 2');
 }
 console.log('this is function');
 func2();
}
func1();
/**
 * console:
 * this is function
 * this is function 2
 */


const arrowFunc1 = () => {
 const arrowFunc2 = () => {
  console.log('this is arrow function 2');
 };
 console.log('this is arrow function');
 arrowFunc2();
};

arrowFunc1();
/**
 * console:
 * console.log('this is arrow function');
 * console.log('this is arrow function 2');
 */

{
 /**
  * Описати функцію, яка примає два параметри. Перший це масив чисел, а другий значення на яке потрібно збільшити кожен другий елмент масиву
  * func1([1,2,3,4,5,6,7], 56) => [1,58,3,60,5,62,7]
  */

 const increase = (arr, value) => {
  return arr.map((el, i) => {
   if (i % 2) {
    return el;
   }
   return el + value;
  });
 };

 console.log('res:', increase([1, 2, 3, 4, 5, 6, 7], 56));
 console.log('res:', increase([34, 121, 345, 34654], 78));
}

{
 const humanFirstName = "first name 1";
 const humanLastName = "last name 1";
 const humanAge = 45;

 const human = {
  firstName: 'f1',
  lastName: 'l1',
  age: 45,
  // cityName: 'Lviv'
 };

 console.log('human 1', human.firstName, human.lastName, human.age);
 console.log('human 1', human); // human 1 [Object object]
 console.log('human 1', JSON.stringify(human)); // human 1 { firstName: 'f1',lastName: 'l1', age: 45 }

 human.age = 78;
 // human = { g: 56 } // => error
 human.cityName = 'Lviv';

 delete human.cityName;

 /**
  * car: { license: string, model: string }
  */

 human.car = { license: 'license 1', model: 'model 1' };
 human.car.license = 'license editable';

 const students = [
  { firstName: 'f1' }, // 0
  { firstName: 'f2' }, // 1
  { firstName: 'f3' }, // 2
  { firstName: 'f4' }, // 3
 ];

 students[3].firstName = 'f3 editable';

 const newStudent = { firstName: 'f5' };
 students[1] = newStudent;

 newStudent.lastName = 'l5';

 console.log(JSON.stringify(students[1])); // { firstName: 'f5', lastName: 'l5' }

 let str = '{ "value": 65, "text": "str -1", "sub": { "name": "qwerty"} }';

 const q = JSON.parse(str);

 console.log(q.value); // => 65
 console.log(q.text); // => "str -1"

}