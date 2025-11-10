// 1. 배열 구조분해 할당 연습
// fruits배열에서 첫 번째 값은 first, 두 번째 값은 second 변수에, 나머지는 others 배열에 할당하는 코드를 작성하기.
// const fruits = ['apple', 'banana', 'cherry', 'grape']; 
// // 코드 작성

// console.log(first) // apple
// console.log(second) // banana
// console.log(others) // ['cherry','grape']

const fruits = ['apple', 'banana', 'cherry', 'grape'];

// 구조분해 할당
const [first, second, ...others] = fruits;

console.log(first);   // apple
console.log(second);  // banana
console.log(others);  // ['cherry', 'grape']