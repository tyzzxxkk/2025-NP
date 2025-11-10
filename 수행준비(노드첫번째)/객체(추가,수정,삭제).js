// 2. 프로퍼티 추가, 수정, 삭제
// 빈 객체 person에 job: "teacher"를 추가하고, person2의 job은 student로 수정하시오.
// 객체 person2.job에 undefined가 출력되게 하시오.
// const person = {};
// const person2 = { job:"teacher" };

// // 1) 여기에 코드 작성
// // 2) 여기에 코드 작성

const person = {};
const person2 = { job: "teacher" };

// 1) person에 job: "teacher" 추가
person.job = "teacher";
console.log(person.job); // teacher

// 2) person2의 job을 "student"로 수정
person2.job = "student";
console.log(person2.job); // student

// 3) person2의 job 프로퍼티 삭제 → undefined 출력
delete person2.job;
console.log(person2.job); // undefined