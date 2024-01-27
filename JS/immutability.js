// immutability 변경불가성
// 그 상태를 변경할 수 없는 디자인 패턴
// 함수형 프로그래밍 핵심 원리

// 참조 전달을 통해 의도하지 않은 객체 변경이 발생을 방지
// 객체 변경 필요 시 객체 방어적 복사 defensive copy를 통해
// 새 객체 생성 후 변경 혹 observer 패턴으로 객체 변경 대처

// 원시타입은 immutable value로써 변경 불가능 한 값이다.
// 해당 메모리 영역 변수 재할당은 가능하지만 값 변경은 불가능한
// 것을 primitive value라고 하고 대표적으로 String 타입이 있다.
var str = 'hello world';
str = 'hi';
// 위 str 변수에 hello world 메모리 주소를 가리키고 있다가
// 새 할당에 의하여 hi 메모리 주소를 가리키게 된다.

var user = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};

var myName = user.name; // 변수 myName은 string 타입이다.
user.name = 'Kim';
console.log(myName); // Lee

myName = user.name;  // 재할당
console.log(myName); // Kim

// 위 객체 프로퍼티 값 복사는 call by value다.
// 프로퍼티 값 타입이 primitive value 이기 때문이다.

var user1 = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};

var user2 = user1; // 변수 user2는 객체 타입이다.

user2.name = 'Kim';

console.log(user1.name); // Kim
console.log(user2.name); // Kim

// 위 객체 값 복사는 call by ref다.
// 객체와 객체끼리의 복사기 때문이다.

// 불변 데이터 패턴 immutable data pattern
// call by ref로 인한 의도치 않는 객체 변경을 방지,
// 불변 객체로 만들고, 객체 변경 시 객체 방어적 
// 복사를 통해 새 객체 생성 복사
// * 객체의 방어적 복사 defensive copy
// Object.assign
// 불변객체화를 통한 객체 변경 방지
// Object.freeze

// object.assign
// 타깃 객체로 소스 객체의 프로퍼티를 복사
// 함수 리턴 값은 타겟 객체 반환
// Object.assign(target, ...sources)

// Copy
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1}
console.log(obj === copy); // false

// Merge
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const merge1 = Object.assign(o1, o2, o3);
console.log(merge1);
console.log(o1);

// Merge
const o4 = { a: 1 };
const o5 = { b: 2 };
const o6 = { c: 3 };

const merge2 = Object.assign({}, o4, o5, o6);

console.log(merge2); // { a: 1, b: 2, c: 3 }
console.log(o4);     // { a: 1 }

const user3 = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};

// 새로운 빈 객체에 user1을 copy한다.
const user4 = Object.assign({}, user3);
// user1과 user2는 참조값이 다르다.
console.log(user3 === user4); // false

user4.name = 'Kim';
console.log(user3.name); // Lee
console.log(user4.name); // Kim

// 객체 내부의 객체(Nested Object)는 Shallow copy된다.
console.log(user3.address === user4.address); // true

user3.address.city = 'Busan';
console.log(user3.address.city); // Busan
console.log(user4.address.city); // Busan

// Object.freeze
// freeze는 불변(immutable) 객체로 만들 수 있다.

const user5 = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};

// Object.assign은 완전한 deep copy를 지원하지 않는다.
const user6 = Object.assign({}, user5, {name:'Kim'});

console.log(user5.name);
console.log(user6.name);

Object.freeze(user5);
user5.name = 'Kim'; // 무시된다.
console.log(user5); 

console.log(Object.isFrozen(user5));

// 내부 객체는 변경가능..
user5.address.city = 'Busan';
console.log(user5);

// 내부 객체까지 변경 불가능하게 만들려면 DeepFreeze 사용
function DeepFreeze(obj) {
  const props = Object.getOwnPropertyNames(obj);

  props.forEach((name) => {
    const prop = obj[name];
    if (typeof prop === 'object' && prop !== null) {
      DeepFreeze(prop);
    }
  });

  return Object.freeze(obj);
}

// assign, freeze 사용법도 번거롭고, 성능상 이슈 있어서
// facebook이 제공하는 immutable.js를 권유
// 자료구조 List, Stack, Map, OrderedMap, Set, OrederedSet, Record
// 같은 영구 불변 (Permit Immutable) 데이터 구조 제공
// npm install immutable

const { Map } = require('immutable');
const map1 = Map({a:1, b:2, c:3});
const map2 = map1.set('b', 50);
console.log(map1.get('b')); // 2
console.log(map2.get('b')); // 50


