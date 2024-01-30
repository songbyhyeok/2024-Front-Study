// 객체 생성 방법 세 가지
// 1. 객체 리터럴
var emptyObj = {};
console.log(typeof emptyObj); // object type

var cat = {
  name: 'lyn',
  gender: 'female',
  sayMeow: function() {
    console.log('meow~');
  }
}

console.log(typeof cat); // object type
console.log(cat); // cat info

cat.sayMeow(); // 'meow~'

// 2. Object 생성자 함수
// 빈 객체 생성
var person = new Object();
// 빈 객체에 프로퍼티 추가
person.name = 'Hyeok';
person.gender = 'male';
person.sayHello = function() {
  console.log('hello my name is ' + this.name);
}

console.log(typeof person); // object type
console.log(person); // person info

person.sayHello(); // 'behavior'

// 3. 생성자 함수
function Person(name, gender) { // 생성자 함수, 첫 문자 대문자 표기
  this.name = name;         // public
  this.gender = gender;     // public
  var hobby = 'watch movie'; // private
  this.sayHello = function() {
    console.log('hi! my name is ' + this.name);
  } // public
}

// 인스턴스 생성
var person1 = new Person('Hyeok', 'male');
var person2 = new Person('Gildong', 'male');

console.log('person1 type: ', typeof person1);
console.log('person2 type: ', typeof person2);
console.log('person1: ', person1);
console.log('person2: ', person2);

person1.sayHello(); // hi my name is hyeok
person2.sayHello(); // hi my name is gildong

console.log(person1.hobby); // undefined

// 프로퍼티 키
var dog = {
  'name': '백구',
  age: 20,  // 프로퍼티 키가 문자열이 아니라면 암묵적 타입 변환
  function: 5, // 가능은 하지만 지양할 것(키워드이기 때문)
  'first_adoption': '2014/06/12',
  // [second-adoption]: '2020/09/27', // -이 들어간 key는 암묵 타입 변환x, JS 유효 이름이 아닌 -연산자 표현식이다.
  // 표현식 키는 대괄호 묶어 사용한다. 하지만 식별자 key는 Ref Error 발생
  hobby : function() { // 프로퍼티의 함수는 메소드라고 칭한다.
    console.log('i am running');
  },
  'third-adoption': 'undef...',
}

console.log(dog);

// 프로퍼티 읽기
// 두 가지 마침표. 그리고 대괄호[] 두 가지 표기법이 있다.
console.log(dog.first_adoption);
console.log(dog['first_adoption']);
// 유효 이름이거나 예약어가 아닌 경우 두 가지 표기법 다 사용 가능
// 대괄호 표기법에 들어간 key는 ''로 감쌀 것

//console.log(dog.third-adoption); // - 표현식은 .으로 호출 못한다.
console.log(dog['third-adoption']); // 대괄호 표기법으로만 표현 가능

// 프로퍼티 값 갱신
dog.first_adoption = '2015/10/23';
console.log(dog.first_adoption);

dog["third-adoption"] = '2021/01/25';
console.log(dog['third-adoption']);

// 프로퍼티 동적 생성
dog.skill = function() {
  console.log('bark!!~');
}

dog['skill2'] = function() {
  console.log('lie down');
}

dog.skill();
dog['skill2()'];

// 프로퍼티 삭제
console.log(dog);

delete dog.skill2;
//console.log(dog.skill2()); // undefined

delete dog; // 프로퍼티 삭제만 가능 객체 삭제x
console.log(dog); 

// 객체 출력 
// for-in문
// 마침표 . 표기법으로 호출이 안된다.
// 객체 프로퍼티 순서가 보장되지 않는다.
for(var prop in dog) {
  console.log(prop + ': ' + dog[prop]);
}

// 배열 순회 목적으로 for-in 문 사용은 적합하지 않다.
// 객체와 마찬가지로 출력 시 순서를 보장하지 않는다.
// 배열 요소만 순회하지 않는다.

var array = ['one', 'two'];
array.name = 'my array';

for(var index in array) {
  console.log(index + ': ' + array[index]);
} // -> 0: one, 1: two, name: my array

// 배열은 ES6에서 제공하는 for-of문을 사용한다.
for(const [index, value] of array.entries()) {
  console.log(index, value);
} // -> 0 one, 1 two

