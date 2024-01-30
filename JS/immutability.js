// object assign

// copy
const obj = { a : 1};
const copy = Object.assign({}, obj);
console.log(copy); // {a:1}
console.log(obj == copy); // false

// merge 
// 각 객체가 서로 합쳐졌지만 같은 주소를 공유 x
const o1 = {a : 1}, o2 = {b : 2}, o3 = {c : 3};
const merge = Object.assign(o1, o2, o3);
console.log(merge); // {a: 1, b: 2, c: 3}
console.log(o1); // {a: 1, b: 2, c: 3}

// merge2
// merge2 변수에 각 객체 값을 병합, 각 객체끼리 서로 병합x 
const o4 = {a:1}, o5 = {b : 2}, o6 = {c: 3};
const merge2 = Object.assign({}, o4, o5, o6);
console.log(merge2); // {a: 1, b: 2, c: 3}
console.log(o4); // {a: 1}

// Shallow copy 허용
const tiger = {
  name : "jackson",
  child: {
    name: "joosy"
  }
}

const tiger2 = Object.assign({}, tiger);
console.log(tiger === tiger2); // false

tiger2.name = 'coosy';
console.log(tiger2.name); // coosy
console.log(tiger.name); // jackson

// 내부 객체는 shallow copy
console.log(tiger2.child === tiger.child); // true
tiger.child.name = 'zacky';
console.log(tiger.child.name); // zacky
console.log(tiger2.child.name); // zacky

// Object freeze
const user = {
  name: 'hyeok',
  address: {
    city: 'seoul'
  }
};

const user2 = Object.assign({}, user, {name : 'kim'});
console.log(user.name); // hyeok
console.log(user2.name); // kim
Object.freeze(user); 
user.name = 'lee'; // 무시
console.log(user.name); // hyeok
console.log(user2.name); // kim

// freeze도 내부 객체 변경을 못막는다.
user.address.city = 'busan';
console.log(user.address.city); // busan
console.log(user2.address.city); // busan


