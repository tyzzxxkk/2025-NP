// 4. 클래스와 메서드
// 클래스 Person을 만들기
// name을 받는 생성자 만들기
// greet() 메서드 만들기
// 리턴 값의 형태 : `"Hi, I'm [이름]"
// //클래스 Person 만들기

// //name을 받는 생성자 만들기

// //greet() 메서드 만들기

// const p1 = new Person("김윤지");
// console.log(p1.greet()); // 메서드 출력

class Person {
    constructor(name) {
      this.name = name;
    }
  
    greet() {
      return `Hi, I'm ${this.name}`;
    }
  }
  
  const p1 = new Person("김윤지");
  console.log(p1.greet()); // Hi, I'm 김윤지