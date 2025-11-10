// 6. 정적(static)메서드
// MathUtil 클래스에 정적메서드와 일반메서드 추가하기
// 정적메서드 square(n)
// n × n 반환
// 일반 메서드 double(n)
// n × 2 반환

// // 여기에 코드 작성

// console.log(MathUtil.square(4)); // 16
// const mu = new MathUtil();
// console.log(mu.double(7)); // 14

class MathUtil {
    // 정적 메서드 (클래스명으로 직접 호출)
    static square(n) {
      return n * n;
    }
  
    // 일반 메서드 (객체로 호출)
    double(n) {
      return n * 2;
    }
  }
  
  // 실행 확인
  console.log(MathUtil.square(4)); // 16  ← 클래스 자체에서 호출
  const mu = new MathUtil();
  console.log(mu.double(7));       // 14  ← 인스턴스에서 호출  