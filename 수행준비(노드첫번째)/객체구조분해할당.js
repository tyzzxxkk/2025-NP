// 객체 구조분해 할당 연습
// user객체에서 이름은 userName, 나이는 userAge로 변수명을 변경해서 구조분해 할당하는 코드를 작성하기
// const user = { name: 'Eunji', age: 22, hobby: 'painting' };
// // 코드 작성

// console.log(userName) // Eunji
// console.log(userAge) // 22

const user = { name: 'Eunji', age: 22, hobby: 'painting' };

// 구조분해 할당하면서 변수명 변경
const { name: userName, age: userAge } = user;

console.log(userName); // Eunji
console.log(userAge);  // 22