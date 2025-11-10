// 3. 100점 이상이 있는가?

// 객체 배열 students7 에서 만점자가 있는 지 확인할 수 있는 문장을 완성하세요.
// const students7 = [
//   { name: "Kim", score: 80 },
//   { name: "Lee", score: 95 },
//   { name: "Park", score: 70 }
// ];

// // const hasPerfect = ??
// console.log(hasPerfect); // false

// students7.push({ name: "Jeon", score: 100 })
// // const hasPerfect2 = ??
// console.log(hasPerfect2); // true

const students7 = [
    { name: "Kim", score: 80 },
    { name: "Lee", score: 95 },
    { name: "Park", score: 70 }
  ];
  
  // 100점 이상이 있는가?
  const hasPerfect = students7.some(student => student.score === 100);
  console.log(hasPerfect); // false
  
  students7.push({ name: "Jeon", score: 100 });
  
  // 다시 확인
  const hasPerfect2 = students7.some(student => student.score === 100);
  console.log(hasPerfect2); // true  