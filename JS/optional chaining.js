// 옵셔널 체이닝 연산자
// 객체 프로퍼티 key 값이 유효한지 판단
// nullish(undefined or null)라면 undefined 반환

const students = {
    hyeok: {
        age: 20,
        score: {
            kor: 90,
            eng: 80,
            math: 70
        }
    },
    hatch: {
        age: 25
    }
}

// 옵셔널체이닝 x 
console.log(students.hatch && students.hatch.score && students.hatch.score.eng);

// 옵셔널체이닝 o
console.log(students.hatch?.score?.eng);

// 사용할 경우 조건문이 간결해지고 가독성, 생산성을 높인다.

// 다른 케이스
user = {
    name: 'hyeok',
    age: 29,
    friends: {
        'other1': {
            name: 'hatch',
            age: 29
        },
        'other2': {
            name: 'john',
            age: 28
        }
    }
}

function getFriendName(user) {
    if (user === undefined || user === null) return undefined;
    else if (user.friends === undefined) return undefined;
    else if (user.friends.other1 === undefined) return undefined;

    return user.friends.other1.name;
}

//user = null;
const friendName = getFriendName(user);
console.log(friendName);

// 옵셔널 체이닝 키워드 사용 시 비교해서 나아졌다!
function getFriendName2(user) {
    return user?.friends?.other1?.name;
}

console.log(getFriendName2(user));

// nullish 연산자와 함께 병행
const user2 = {};
const userAddress = user2.info?.address ?? '모르는 주소'; // '모르는 주소'
console.log(userAddress);

// 대괄호 표기법 옵셔널 체이닝 사용
const user3 = {
	info: {
    	firstName: 'hello world'
    }
};
const key = "firstName";
const userName = user3.info?.[key];
console.log(userName);

// 존재하지 않을 수 있는 메서드 호출할 때 유용
const some = {
	customMethod: function() {
    	console.log('hello optional');
    }
}

let result = some.customMethod?.();
console.log(result);

const some2 = {
	customMethod: 'some2'
}

// 메소드가 아니므로 에러 발생
// let result2 = some2.customMethod?.();
// console.log(result2);

//const testUser = null;
// 이 코드는 에러 발생
// 옵셔널 체이닝 앞에 오는 변수는 반드시 선언이 되어 있어야 한다.
//console.log(testUser?.info?.age);

// 옵셔널 체이닝 연산자는 논리 연산자 &&와 비슷한 성질을 가졌다.
