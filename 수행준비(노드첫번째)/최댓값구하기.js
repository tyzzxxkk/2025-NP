// 5.최댓값 구하기
// rest 파라미터로 전달받은 값 중 최댓값 구하기
// 최댓값 구하는 함수 Math.max()라는 기본 내장함수 사용 가능
// Math.max(5,6,4,3)  // 6
// var numbers = [2,3,4,5,6,1,3,2,5,5,4,6,7];
// // 함수 선언 : fnFindMax
// console.log() // fnFindMax 호출하기, numbers 매개변수로 넣어

function fnFindMax(...numbers) {
    // 전달받은 모든 숫자 중 최댓값 반환
    return Math.max(...numbers);
  }
  
  var numbers = [2, 3, 4, 5, 6, 1, 3, 2, 5, 5, 4, 6, 7];
  
  // numbers 배열을 펼쳐서 전달해야 함
  console.log(fnFindMax(...numbers)); // 7
  