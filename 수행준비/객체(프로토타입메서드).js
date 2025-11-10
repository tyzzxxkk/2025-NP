// 3. 생성자 함수와 프로토타입 메서드
// 생성자 함수 Car(brand, year)를 만들기
// 프로토타입에 age(currentYear) 메서드를 추가
// 차의 나이를 반환하는 메서드
// myCar = new Car("Hyundai", 2020) 로 만들고 2025년 기준 나이를 출력
// function Car(brand, year) {
// 	//생성자 함수 작성
// }

// // 프로토 타입에 메서드 추가 작성

// const myCar = new Car("Hyundai", 2020);
// console.log(myCar.age(2025)); // 5  : 2025년  5 출력

// 1️⃣ 생성자 함수 정의
function Car(brand, year) {
    this.brand = brand; // 브랜드 속성
    this.year = year;   // 출시 연도 속성
  }
  
  // 2️⃣ 프로토타입 메서드 추가
  Car.prototype.age = function(currentYear) {
    return currentYear - this.year;
  };
  
  // 3️⃣ 객체 생성
  const myCar = new Car("Hyundai", 2020);
  
  // 4️⃣ 2025년 기준 나이 출력
  console.log(myCar.age(2025)); // 5  