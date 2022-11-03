---
2022-09-24-Sat
---
  

 
### ***<span style="color:gray">Browser</span>***
브라우저는 `HTML`을 열고, `HTML`은 `CSS`와 `JS`를 가져온다.  
(CSS, JS는 아무런 작동을 안함)

### ***<span style="color:gray">Datatype</span>***
`Int`, `float`, `text`, `string` 등 `Python`과 동일함.

------
### ***JS***
~~~js
>> 브라우저 console에 명령어를 보냄.
브라우저에 print
console.log(anytype)
~~~

### ***Variables***
~~~js
const < variable 변수 설정

ex)
const a = 5; 

Long variable Name > camelCase

const veryLongVariableName = 0 ;

------

let < variable 변수 설정

문법은 동일.

const >> 상수. 바꾸지 않을 변수를 설정
let >> 변수로 설정.

ex)
let myName = 'name'; (let == 생성자)
myName = 'new name';

let 으로 만든 변수는 뒤에 업데이트가 가능하다.
const 는 변수를 업데이트가 불가능.

----- 
예전에는
var 을 사용해서 변수를 설정
var 은 const, let 을 비교하지 않음.
따라서
const == 변수 고정, 보호
let == 변수 변경, 업데이트 가능
~~~
        
### ***Booleans***
`python`과 동일하게 진행한다.

~~~js
const amIFat = true;
const amIFat = false;
const amIfat = null; 
>> Null 의 경우에는 "여기에 값이 없다."라는 것을 의도적으로 표시하는 것.
~~~

***undefined***
~~~js
let something;
dtype = undefined

>> variable은 존재하지만, 변수가 없음.
~~~

***Data Structure***

***<span style="color:Green">1. Array</span>***
~~~js
python 과 동일함.
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"]

// Get Item from Array : Friday
console.log(daysOfWeek[4]);

// Add one more day to array
> python : add

daysOfWeek.push("sun");
~~~

***Objects***
~~~js
// object가 없을 경우
// 좋지 않다.
const playerName = "daniel";
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = "little bit";

// no meaning
const player = ["daniel", 1212, false, "little bit"]
~~~

~~~js
// python Dictional 와 동일

const player = {
    name : "daniel",
    points : 10,
    fat : true,
  
};

console.log(palyer);
console.log(player.name);

console.log(player["name"]);

// add or change
player.lastName = "potato";
player.points = 15;
// 추가로 넣고 싶으면 같은 포맷으로 넣을 수 있음.
~~~

***Functions***
~~~js
function sayHello(nameOfPerson,age){
    // 여기다 쓰는 것이 실행될 것.
    console.log(nameOfPerson,age);
}

sayHello("daniel", 30);

const player = {
    name = 'daniel',
    sayHello = function sayHello(otherPersonsName){
        console.log('hellp' + otherPersonsName+ ', nice to meet you');
    },
};
~~~

***Return***
~~~js
const age = 96;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
};
  
const krAge = calculateKrAge(age);

console.log(krAge);
        
// 
const calculator = {
    plus : function (a,b) {
        return a + b,
    },
};

const plusResult = calculator.plus(2,3);

console.log(plusResult)
~~~

***Conditionals***
~~~js
const age = prompt("age?");
// Type 확인

console.log(typeof age);

// string > int
parseInt("15")

// check Not A Number 
isNaN(age)

if(condition){
    // condition == True
} else if(age < 18){
    // condition == False
} else {
    // Final condition
}

// js 에서는 and == &&   or == ||
if (isNan(age)){
    console.log("AA");
} else if (age <18 && age <= 12){
    console.log("BB");
} else if (age >= 18 || age <= 50){
    console.log("CC");
}

true || true === true
false || true === true
true || false === true
false || false === false
~~~

