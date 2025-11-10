function sayHello() {
    console.log("Hello");
}

function limitFunc(func, limit) {
    let count = 0;
    
    return function() {
        if (count < limit) {
            count++;
            func();
        } else {
            console.log("더 이상 실행할 수 없습니다.");
        }
    }
}

const limitedHello = limitFunc(sayHello, 2);

limitedHello();
limitedHello();
limitedHello();


const checker = createChecker();

function createChecker() {
    const itemArray = [];
    return function(item){
        if(itemArray.includes(item)){
            return '중복';
        }else{
            itemArray.push(item);
            return "통과";
        }
        // itemArray.push(item);
        // console.log("itemArray", itemArray);
    }
}

console.log(checker("apple"));
console.log(checker("banana"));  
console.log(checker("apple"));  
console.log(checker("orange")); 
console.log(checker("banana"));  