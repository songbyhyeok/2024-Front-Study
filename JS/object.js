// // // 객체 리터럴 실습
// // var emptyObject = {};
// // console.log(typeof emptyObject);

// // var person = {
// //     name: 'Lee',
// //     gender: 'male',
// //     sayHello: function() {
// //         console.log('Hi My name is ' + this.name);
// //     }
// // };

// // console.log(typeof person);
// // console.log(person);

// // person.sayHello();

// // console.log("---------------------------");

// // // Object 생성자 함수 실습
// // // 빈 객체
// // var person = new Object();
// // // 프로퍼티 추가
// // person.name = 'Lee';
// // person.gender = 'male';
// // person.sayHello = function() {
// //     console.log('Hi! My name is ' + this.name);
// // }

// // console.log(typeof person);
// // console.log(person);

// // person.sayHello();

// // console.log("---------------------------");

// // // 생성자 함수
// // var person1 = {
// //     name: 'Lee',
// //     gender: 'male',
// //     sayHello: function() {
// //         console.log('Hi! My name is ' + this.name);
// //     }
// // }

// // var person2 = {
// //     name: 'Kim',
// //     gender: 'female',
// //     sayHello: function() {
// //         console.log('Hi My name is ' + this.name);
// //     }
// // }

// // function Person(name, gender) {
// //     this.name = name;
// //     this.gender = gender;
// //     this.sayHello = function() {
// //         console.log('Hi! My name is ' + this.name);
// //     }
// // }

// // console.log("---------------------------");

// // // 인스턴스 생성
// // var person1 = new Person('Lee', 'male');
// // var person2 = new Person('Kim', 'female');

// // console.log('person1: ', typeof person1);
// // console.log('person2: ', typeof person2);
// // console.log('person1: ', person1);
// // console.log('person2: ', person2);

// // person1.sayHello();
// // person2.sayHello();

// // console.log("---------------------------");

// // // 생성자 함수 외부 참조 가능 불가능
// // function Person(name, gender) {
// //     var married = true; // private
// //     this.name = name;       // public
// //     this.gender = gender;   // public
// //     this.sayHello = function() {
// //         console.log('Hi! My name is ' + this.name);
// //     };
// // }

// // var person = new Person('Lee', 'male'); 

// // console.log(typeof person); // object
// // console.log(person); // Person {name: 'Lee', gender: 'male', sayHello: [Function]}

// // console.log(person.gender);
// // console.log(person.name);
// // console.log(person.sayHello);
// // console.log(person.sayHello());
// // console.log(person.married);

// // // 생성자 함수
// // function Person(name, gender) {
// //     this.name = name;
// //     this.gender = gender;
// //     this.sayHello = function(){
// //       console.log('Hi! My name is ' + this.name);
// //     };
// //   }
  
// //   // 인스턴스의 생성
// //   var person1 = new Person('Lee', 'male');
// //   var person2 = new Person('Kim', 'female');
  
// //   console.log('person1: ', typeof person1);
// //   console.log('person2: ', typeof person2);
// //   console.log('person1: ', person1);
// //   console.log('person2: ', person2);
  
// //   person1.sayHello();
// //   person2.sayHello();

// //   console.log("---------------------------");

// //   // 객체 프로퍼티 접근
// //   // 3.1 프로퍼티 키
// // var person = {
// //     'person-name': 'Ung-mo',
// //     'last-name': 'Lee',
// //     gender: 'male',
// //     1: 10,
// //     function: 1 
// // }

// // console.log(person);

// // console.log("---------------------------");
// // // var person = {
// // //     first-name: 'Ung-mo';
// // // }

// // var person = {
// //     [first-name]: 'Ung-mo', 
// // }
// // console.log(person);

// // console.log("---------------------------");
// // // 프로퍼티 값 읽기
// // // . 표기법과 [] 표기법이 있음.
// // var person = {
// //     'first-name': 'Ung-mo',
// //     'last-name': 'Lee',
// //     gender: 'male',
// //     1: 10
// // }

// // console.log(person);

// // console.log(person.first-name);    // NaN: undefined-undefined
// // console.log(person[first-name]);   // ReferenceError: first is not defined
// // console.log(person['first-name']); // 'Ung-mo'

// // console.log(person.gender);    // 'male'
// // console.log(person[gender]);   // ReferenceError: gender is not defined
// // console.log(person['gender']); // 'male'

// // console.log(person['1']); // 10
// // console.log(person[1]);   // 10 : person[1] -> person['1']
// // console.log(person.1);    // SyntaxError

// // 프로퍼티 값 읽기
// var person = {
//     'first-name': 'Ung-mo',
//     'last-name': 'Lee',
//     gender: 'male',
//   };
  
//   console.log(person.age); // undefined

// // 프로퍼티 값 갱신
// var person = {
//     'first-name': 'Ung-mo',
//     'last-name': 'Lee',
//     gender: 'male',
//   };
  
//   person['first-name'] = 'Kim';
//   console.log(person['first-name'] ); // 'Kim'

// // 프로퍼티 동적 생성
// var person = {
//     'first-name': 'Ung-mo',
//     'last-name': 'Lee',
//     gender: 'male',
//   };
  
//   person.age = 20;
//   console.log(person.age); // 20

// // 프로퍼티 삭제
// var person = {
//     'first-name': 'Ung-mo',
//     'last-name': 'Lee',
//     gender: 'male',
//   };
  
//   delete person.gender;
//   console.log(person.gender); // undefined
  
//   // 객체 속성만 삭제 가능, 객체 삭제 시 null로 지정해야 함
//   delete person;
//   console.log(person); // Object {first-name: 'Ung-mo', last-name: 'Lee'}

// for-in문
// var person = {
//     'first-name': 'Ung-mo',
//     'last-name': 'Lee',
//     gender: 'male'
//   };

//   // prop에 객체의 프로퍼티 이름이 반환된다. 단, 순서는 보장되지 않는다.
// for (var prop in person) {
//     console.log(prop + ': ' + person[prop]);
//   }

//   var array = ['one', 'two'];

// // index에 배열의 경우 인덱스가 반환된다
// for (var index in array) {
//   console.log(index + ': ' + array[index]);
// }

// // 배열 요소들만을 순회하지 않는다.
// var array = ['one', 'two'];
// array.name = 'my array';

// for (var index in array) {
//   console.log(index + ': ' + array[index]);
// }

// const array = [1, 2, 3];
// array.name = 'my array';

// for (const value of array) {
//   console.log(value);
// }

// for (const [index, value] of array.entries()) {
//     console.log(index, value);
//   }

  // Pass-by-reference
var foo = {
    val: 10
  }

  var bar = foo;
  console.log(foo.val, bar.val); // 10 10
console.log(foo === bar);      // true

bar.val = 20;
console.log(foo.val, bar.val); // 20 20
console.log(foo === bar);      // true

// Pass-by-value
var a = 1;
var b = a;

console.log(a, b);    // 1  1
console.log(a === b); // true

a = 10;
console.log(a, b);    // 1  10
console.log(a === b); // false