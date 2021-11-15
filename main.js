const { iteratee } = require('lodash');
var _ = require('lodash');

console.log(_);


//Closures - a function ran, the function execture. It's never going to execute again. NB: the child scope always has access to the parent scope.

//Currying
const multiply = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a * b; 
const multiplyBy8 = curriedMultiply(8);

//Compose 
const compose = (f,g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(9);

//Avoiding Side Effects, Functional Purity

//Advanced Arrays
const array = [1, 2, 10, 16];
const double = []
const newArray = array.forEach((num) => {
    double.push(num*2);
})
console.log('forEach', double);

//Map, Filter, Reduce
const newArray = array.map((num) => {
    return num * 2
})
console.log('map', newArray);

//Refine map line of code
const mapArray = array.map(num => num * 2)
console.log('map', newArray);

//Filter
const filterArray = array.filter(num => num > 5)
console.log('filter', filterArray);

//Reduce
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 8);
console.log('reduce', reduceArray);

//ADVANCED OBJECTS

//reference type
var object1 = { value: 100 };
var object2 = object1;
var object3 = { value: 100 };

// context vs Scope
const object4 = {
    c: function() {
        console.log(this);
    }
}

// instantiation
class Animal {
    constructor(name, type, color) {
        console.log('Animal', this);
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mammal extends Animal {
    constructor(name, type, color) {
        super(name, type, color)
    } 
    Introduction() {
        console.log(`Cawwww!!! My name is ${type.name}, and I am a ${this.color} colored ${this.type}`)
    }
}

const bird = new Mammal('Anietie', 'bird', 'gray')

//Debugging


//Logical statement
let nameVerification = prompt('What is your name?')
let checkAge = +prompt('What is your age?', 18);
if (checkAge === 18) {
    alert(`Congratulations ${nameVerification}, you are ready to be driving lessons`);
} else if (checkAge > 18) {
    alert('You are overdue for driving lesson. Buckle your seatbelt');
} else if (checkAge < 18) {
    alert('Oops! You are too young to enrol. Wait till you are 18');
} else {
    alert('Visit the registration counter to begin!!!');
}


//Task: enter number greater than 100 else, continue 'enter' loop
let sum = 0;
while (true) {
    let numberValue = prompt('Enter a number greater than 100: ', '');
if ( numberValue < 100 || !numberValue || numberValue == null || numberValue == '') break;
sum += numberValue
}
alert('Sum: ' + sum);

//Task: generate prime numbers of number btw 0 t0 10
let n = 10;

nextPrime: 
for ( i = 2; i <= n; i++) {
    for (j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
    }
    alert(i);
}

// Generate prime numbers of any given number n

function showPrime(n) { 
    for ( i = 2; i < n; i++) {
        if ( isPrime(i) ) continue;
        alert(i);
    }
     
}

function isPrime(n) {
    for ( i = 2; i < n; i++) {
        if ( n % i == 0) return false;
    }
     return true;
}

//Check age for access
function checkAge(age) {
    if (age >= 18) {
       return true;
    } else {
       return confirm ('Do you have your parent permission?');
      }
    }
    
    let age = +prompt('How old are you?', 18);
    
    if (checkAge(age)) {
       alert('Access Granted!');
    } else {
       alert('Access Denied!');
             }

// Finding the power (index) of a number
function powerOfNumber(x,y) {
    let numPow = Math.pow(x,y);
    return numPow;
    } 
    
    let x = +prompt('Enter a base number', 2);
    let y = +prompt('Enter an exponential number', 3);
    if (y < 0) {
         alert('you entered a number that is not valid!'); 
    } else {
      alert ( powerOfNumber(x,y) );
    }

//Code Quality
//Automated Testing with Mocha
//Behaviour Driven Development (BDD)

describe("pow", function() {

    it("3 raised to the power 2 is 9", function() {

        assert.equal(pow(3,2), 9)
    });
    it("3 raised to the power 4 is 81", function() {

        assert.equal(pow(3,4), 81)
    });
    it("5 raised to the power 2 is 25", function() {

        assert.equal(pow(5,2), 25)
    });
});

//Objects. Using the "for...in" loop in objects
let userProps = {
    name: 'admin',
    password: 'pwd',
    isAdmin: true,
    login: 'Access Granted!'
}

for (let key in userProps)
alert(key);

//Optional chaining

//Symbols
//Symbol.toPrimitive

let user = {
    name: "Ken",
    money: 5000,

[Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    return hint == "String:" ? `{name: "${this.name}" }` : this.money;
        }
};
