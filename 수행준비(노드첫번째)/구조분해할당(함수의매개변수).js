// 3. 함수 매개변수 구조분해 할당 연습
// 주석과 같은 결과가 나올 수 있도록 함수를 구조분해 할당을 이용해 작성하기
// printPerson({ name: 'yoon', age: '80' }); // yoon은 80살 입니다.'

// // 코드 작성

function printPerson({ name, age }) {
    console.log(`${name}은 ${age}살 입니다.`);
  }
  
  printPerson({ name: 'yoon', age: '80' }); // yoon은 80살 입니다.  