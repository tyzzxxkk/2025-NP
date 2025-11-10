// 5. 공통 친구 찾기

// A와 B의 친구 목록에서 공통 친구(교집합) 를 찾을 수 있는 문장을 완성하세요.
// const aFriends = new Set(["박진우","박홍준","신채은"]);
// const bFriends = new Set(["신채은","윤정후","윤태민"]);

// // const common 
// console.log(common); // ["신채은"]

const aFriends = new Set(["박진우", "박홍준", "신채은"]);
const bFriends = new Set(["신채은", "윤정후", "윤태민"]);

// 공통 친구(교집합) 찾기
const common = [...aFriends].filter(friend => bFriends.has(friend));

console.log(common); // ["신채은"]
