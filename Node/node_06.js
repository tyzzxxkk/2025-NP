// const students5 = [
//     { name: "Kim", score: 80 },
//     { name: "Lee", score: 95 },
//     { name: "Park", score: 70 }
//   ];
  
//   const over90 = students5.filter(s => s.score > 90);
//   console.log(over90); 

// const students7 = [
//     { name: "Kim", score: 80 },
//     { name: "Lee", score: 95 },
//     { name: "Park", score: 70 }
//   ];
  
//   const hasPerfect = students7.some(s => s.score === 100);
//   console.log(hasPerfect); // false
  
//   students7.push({ name: "Jeon", score: 100 });
  
//   const hasPerfect2 = students7.some(s => s.score === 100);
//   console.log(hasPerfect2); // true

// const hasFail = students7.every(s => s.score >= 60);
// console.log(hasFail); // true (모두 60점 이상)

// students7.push({ name: "Han", score: 20 });

// const hasFail2 = students7.every(s => s.score >= 60);
// console.log(hasFail2); // false (Han이 20점이라 불합격자 있음)

// const aFriends = new Set(["박진우","박홍준","신채은"]);
// const bFriends = new Set(["신채은","윤정후","윤태민"]);

// const common = [...aFriends].filter(friend => bFriends.has(friend));
// console.log(common); // ["신채은"]
