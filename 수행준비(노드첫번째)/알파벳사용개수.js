// 6. 알파벳들 사용 개수를 세어주는 함수 작성
// 매개변수 문장에 들어있는 알파벳의 수를 세어 오브젝트에 기록하는 함수 작성
// countChars('aacbbb') 라고 입력하면 { a : 2, b : 3, c : 1 } 객체를 리턴해주는 함수 작성 (순서 상관 없음)
// forEach 사용하기
// function countChars(str){
// 	// 작성
// }
// console.log(countChars('aacbbb')); //{ a : 2, b : 3, c : 1 } (순서 상관 없음)

function countChars(str) {
    const result = {}; // 문자 개수를 저장할 객체
  
    // 문자열을 글자 하나하나로 쪼개서 순회
    str.split('').forEach(ch => {
      if (result[ch]) {
        result[ch] += 1; // 이미 있으면 +1
      } else {
        result[ch] = 1;  // 처음 등장한 글자면 1로 초기화
      }
    });
  
    return result;
  }
  
  // 테스트
  console.log(countChars('aacbbb')); // { a: 2, c: 1, b: 3 }  (순서는 객체 생성 순서라 바뀔 수 있음)  