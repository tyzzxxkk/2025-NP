// 연습문제2) 중복 검사기
// 함수 createChecker()를 작성하세요.

// 반환된 함수는 어떤 값을 인자로 받습니다.
// 이전에 한 번이라도 입력된 값이면 "중복"을 반환합니다.
// 처음 들어온 값이면 "통과"를 반환합니다.
// 내부적으로 배열이나 객체(Object) 를 사용하세요.
// const checker = createChecker();

// // 함수 createChecker 작성

// console.log(checker("apple"));   // "통과"
// console.log(checker("banana"));  // "통과"
// console.log(checker("apple"));   // "중복"
// console.log(checker("orange"));  // "통과"
// console.log(checker("banana"));  // "중복"

// 중복 검사기 함수 정의
function createChecker() {
    const checked = {}; // 이미 입력된 값들을 저장할 객체
  
    return function(value) {
      if (checked[value]) {
        return "중복";
      } else {
        checked[value] = true;
        return "통과";
      }
    };
  }
  
  // 테스트
  const checker = createChecker();
  
  console.log(checker("apple"));   // "통과"
  console.log(checker("banana"));  // "통과"
  console.log(checker("apple"));   // "중복"
  console.log(checker("orange"));  // "통과"
  console.log(checker("banana"));  // "중복"