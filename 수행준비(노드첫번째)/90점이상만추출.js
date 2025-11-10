// 2. 90점 이상 사람만 추출하기

// 객체 배열 students5 에서 90점 이상의 객체만 추출하는 문장을 완성하세요.
// const students5 = [
//   { name: "Kim", score: 80 },
//   { name: "Lee", score: 95 },
//   { name: "Park", score: 70 }
// ];
// //const over90  
// console.log(over90); // [{ name: "Lee", score: 95 }]

const students5 = [
    { name: "Kim", score: 80 },
    { name: "Lee", score: 95 },
    { name: "Park", score: 70 }
  ];
  
  // 90점 이상만 필터링
  const over90 = students5.filter(student => student.score >= 90);
  
  console.log(over90); // [{ name: "Lee", score: 95 }]
  