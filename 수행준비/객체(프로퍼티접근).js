// 객체 연습문제
// 1. 객체 프로퍼티 접근
// 객체에서 세 가지 방식(점 표기법, 대괄호 리터럴, 변수 키)로 "맹구"를 각각 출력하시오.
// const character = { name: "맹구" }; 

// // 여기에 코드 작성

const character = { name: "맹구" };

// 1️⃣ 점 표기법 (Dot notation)
console.log(character.name); // 맹구

// 2️⃣ 대괄호 표기법 (Bracket notation - 문자열 리터럴)
console.log(character["name"]); // 맹구

// 3️⃣ 변수 키를 이용한 접근 (Bracket notation + 변수)
const key = "name";
console.log(character[key]); // 맹구