function limitFunc(func, limit) {
    let i = 0; // 실행 횟수를 저장할 변수
  
    return function() {
      if (i < limit) {
        func(); // 원래 함수 실행
        count++;
      } else {
        console.log("더 이상 실행할 수 없습니다");
      }
    };
  }