class NumberOE {
    constructor() {
      this.odd = [];
      this.even = [];
    }

    set save(numbers) {
      numbers.forEach(num => {
        if (num % 2 === 0) {
          this.even.push(num);
        } else {
          this.odd.push(num);
        }
      });
    }

    get showOdd() {
      return this.odd;
    }
  
    get showEven() {
      return this.even;
    }
  
    get showAll() {
      return [...this.odd, ...this.even];
    }
  }

  const oe = new NumberOE();
  
  oe.save = [1, 2, 3, 12, 13, 15];
  
  console.log("홀수:", oe.showOdd);   // [1, 3, 13, 15]
  console.log("짝수:", oe.showEven); // [2, 12]
  console.log("전체:", oe.showAll);  // [1, 3, 13, 15, 2, 12]