// nullish는 값이 있는 변수를 찾을 수 있는 연산자
// 논리 연산자 ||와 비슷한 성질을 가졌다.
const a = null;
const b = 'hello nullish';

// nullish x

// a가 null도 undefined도 아니라면...
console.log( (a !== null && a !== undefined) ? a : b);

// nullish o
// 코드량이 준다.
console.log(a ?? b);

// or 연산자는 null, undefined 뿐만 아니라 ''와 0도
// falsy 취급한다.
console.log(a || b);

// or 연산자와 nullish 차이점은 '', 0을 취급하느냐에 차이다.
// nullish는 '', 0을 falsy 취급하지 않는다.
// 따라서 0회 처리, 길이값을 구할 때는 or 연산자를 사용하지 않는다.

console.log(d ?? a);