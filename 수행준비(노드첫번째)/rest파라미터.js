// 4. ...rest 파라미터를 활용하여 전달 받은 모든 숫자를 합한 결과를 반환하는 함수 sumAll 함수를 작성하세요.
// function sumAll(/* 여기에 코드를 작성하세요 */) {
//   // 코드 작성
// }
// console.log(sumAll(2, 3, 4)); // 9
// console.log(sumAll(5, 2));    // 7

function sumAll(...numbers) {
    let sum = 0;
    for (let n of numbers) {
      sum += n;
    }
    return sum;
  }
  
  console.log(sumAll(2, 3, 4)); // 9
  console.log(sumAll(5, 2));    // 7  