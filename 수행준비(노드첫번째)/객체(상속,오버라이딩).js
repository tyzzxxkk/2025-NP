// 5. 상속과 메서드 오버라이드
// Student가 Person을 상속받기
// 생성자(constructor(name, id))에서 부모 클래스 생성자 호출
// study() 메서드 추가
// "[이름] 는 공부중입니다" 출력
// 리턴값 없음
// greet()를 오버라이딩 하기
// "학생 [이름]"을 출력
// 부모의 greet()도 먼저 호출
// class Student extends Person {
// }

// // 출력 및 확인
// const s1 = new Student("김윤지", "2025");
// s1.greet();  
// s1.study(); 

// 부모 클래스 Person (이전 문제 참고)
class Person {
    constructor(name) {
      this.name = name;
    }
  
    greet() {
      console.log(`Hi, I'm ${this.name}`);
    }
  }
  
  // 자식 클래스 Student
  class Student extends Person {
    constructor(name, id) {
      super(name); // 부모 클래스 생성자 호출
      this.id = id;
    }
  
    // greet() 메서드 오버라이드
    greet() {
      super.greet(); // 부모의 greet() 먼저 실행
      console.log(`학생 ${this.name}`);
    }
  
    // study() 메서드 추가
    study() {
      console.log(`${this.name}는 공부중입니다`);
    }
  }
  
  // 출력 및 확인
  const s1 = new Student("김윤지", "2025");
  s1.greet();  // 부모 greet + 오버라이드 결과
  s1.study();  // "김윤지는 공부중입니다"
  