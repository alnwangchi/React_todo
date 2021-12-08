class Person {
  constructor(name, age) {
    // 這邊的 this 指向為實例的對象
    this.name = name;
    this.age = age;
  }
  // 一般方法 被放在原型鏈上 給實例使用
  logName() {
    // 通過實例呼叫該方法後 this 就是該實例
    console.log(`我叫${this.name}，今年${this.age}歲`);
  }
}

const p1 = new Person('Allen',26)
const p2 = new Person('Amy', 20)

console.log(p1);
// 雖無法在 p1 中直接找到 logName 的方法，當我讀取不存在的方法，就會沿著原型鏈上查找
p1.logName();
p1.logName.call(p2) // 把 this 綁定到 p2 實例上，因此 this 指向就變為 p2 實例]

// 建立另一個實例繼承 Person 這個實例
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // 必用 super 來處理原有的屬性
    this.grade = grade; // 新屬性再寫這
  }
}

const s1 = new Student('Yoyo',18,9);
console.log(s1);
s1.logName()
