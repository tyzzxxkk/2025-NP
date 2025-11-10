// 연습문제1) 제한 횟수 함수
// 함수 limitFunc(func, limit)을 작성하세요.

// func는 실행할 함수
// limit은 최대 실행 횟수
// limit을 초과하면 "더 이상 실행할 수 없습니다"를 출력
// function sayHello() {
//   console.log("Hello!");
// }

// limitFunc 정의
function limitFunc(func, limit) {
  let count = 0; // 실행 횟수 저장

  return function() {
    if (count < limit) {
      count++;
      func(); // 전달받은 함수 실행
    } else {
      console.log("더 이상 실행할 수 없습니다");
    }
  };
}

// 테스트용 함수
function sayHello() {
  console.log("Hello!");
}

// 제한 함수 생성 (최대 2번 실행 가능)
const limitedHello = limitFunc(sayHello, 2);

// 실행 테스트
limitedHello(); // Hello!
limitedHello(); // Hello!
limitedHello(); // 더 이상 실행할 수 없습니다
