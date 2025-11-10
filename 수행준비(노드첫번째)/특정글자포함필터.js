// 1. 특정 글자 포함 필터

// 배열subject서 "java"라는 글자가 포함된 언어만 추출하세요.
// const subject = ["javascript", "java", "python", "c++", "typescript"];
// //const subjectJava  
// console.log(subjectJava); // ["javascript", "java"]

const subject = ["javascript", "java", "python", "c++", "typescript"];

// "java"가 포함된 항목만 필터링
const subjectJava = subject.filter(item => item.includes("java"));

console.log(subjectJava); // ["javascript", "java"]