// 4. 모두 60점을 넘겼는가?

// 객체 배열 students7 에서 60점 미달자가 있는 지 확인할 수 있는 문장을 완성하세요.
// // const hasFail = 
// console.log(hasFail); // false
  
// students7.push({ name: "Han", score: 20 })
// // const hasFail2 = 
// console.log(hasFail2); // true

// const students7 = [
//     { name: "Kim", score: 80 },
//     { name: "Lee", score: 95 },
//     { name: "Park", score: 70 }
//   ];
  
  // 60점 미달자가 있는가?
  const hasFail = students7.some(student => student.score < 60);
  console.log(hasFail); // false
  
  students7.push({ name: "Han", score: 20 });
  
  // 다시 확인
  const hasFail2 = students7.some(student => student.score < 60);
  console.log(hasFail2); // true
  