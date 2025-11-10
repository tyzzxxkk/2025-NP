// 2. 동물 클래스 설계하기
// 다음 객체 타입을 보고 분석하여 클래스를 설계하시오.
// 총 3개의 클래스가 나오도록 한다. ( Animal, Dog, Cat )
// const 강아지1 = { type : '말티즈', age : 1  }; 
// const 강아지2 = { type : '진돗개', age : 2  };
// const 고양이1 = { type : '코숏', color : 'white', age : 5 }; 
// const 고양이2 = { type : '러시안블루', color : 'brown', age : 2 };
// 한 살 증가가 되는 메서드 .addAge() 를 호출할 수 있어야 한다.
// 고양이는 색상을 바꿀 수 있으며 set 키워드를 이용한다. (이름 자유)

// 🐾 부모 클래스
class Animal {
    constructor(type, age) {
      this.type = type;
      this.age = age;
    }
  
    // 한 살 증가 메서드
    addAge() {
      this.age += 1;
    }
  }
  
  // 🐶 자식 클래스: 강아지
  class Dog extends Animal {
    constructor(type, age) {
      super(type, age); // 부모의 생성자 호출
    }
  }
  
  // 🐱 자식 클래스: 고양이
  class Cat extends Animal {
    constructor(type, color, age) {
      super(type, age);
      this.color = color;
    }
  
    // 색상 변경 setter
    set changeColor(newColor) {
      this.color = newColor;
    }
  }
  
  // ------------------------------
  // ✅ 테스트 코드
  // ------------------------------
  const 강아지1 = new Dog("말티즈", 1);
  const 강아지2 = new Dog("진돗개", 2);
  const 고양이1 = new Cat("코숏", "white", 5);
  const 고양이2 = new Cat("러시안블루", "brown", 2);
  
  // 나이 증가
  강아지1.addAge();
  고양이2.addAge();
  
  console.log(강아지1); // Dog { type: '말티즈', age: 2 }
  console.log(고양이2); // Cat { type: '러시안블루', color: 'brown', age: 3 }
  
  // 색상 변경
  고양이1.changeColor = "black";
  console.log(고양이1.color); // black  