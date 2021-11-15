const { isEmpty, multiply } = require("lodash");

//Objects. Using the "for...in" loop in objects
let userProps = {
    name: 'admin',
    password: 'pwd',
    isAdmin: true,
    login: 'Access Granted!'
};

for (let key in userProps) {
    alert(key);
    
    alert(userProps[key]);
}

//Create an empty object "user"
let user = {
    name: 'John', //Property 'name' with value 'John'
    surname: 'Smith' //Property 'surname' with value 'Smith'
};
user.name = 'Pete'; //Change value of 'name' to 'Pete'
delete user.name;

//a function isEmpty(obj) that returns true if empty and false if otherwise
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
        return true;
}

//Task
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

let sum = salaries.John + salaries.Ann + salaries.Pete;
alert(sum);
//OR
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
alert(sum);

//Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
let obj = {
    width: 200,
    height: 300,
    title: 'My object'
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {

            obj[key] *= 2;
        }     
    }
}


// filter out the prime numbers from the list

let arrayList = [2, 3, 5, 4, 5, 9, 11, 13, 14,'Faith', 14 ,19 , 20,];

// ALGORITHM
// Read the list
// Determine typeof entities in the list
// Determine length of list
// Create a function to filter prime numbers in the list
      //PROCESS
      //..Create a new list
// Create a function show the prime numbers
      //..Push the prime numbers in a new list

function showPrime() {
      typeof arrayList;
      for (i = 0; i < arrayList.length; i++) {
          if (!isPrime(i)) continue;
      }
}

function isPrime() {
    for ( i = 2; j < i; i++) {
        if (arrayList[i] % 2 === 0) return false;
      }
      return true;
    }

// Cloning of object

let job = {
    name: 'Felix',
  supervisor: {
      rank: 'HRM',
      experience: '4years'
  }
};

let entry = Object.assign({}, job);

//
function count(string, char) {
    let base = new RegExp(char, "gi")
    return string.match(base).length
}

var str = 'Some days are so so lonely';
console.log(count(str, 'i'));


// Methods

let user = {
    name: "Bassey",
    age: 30,
      
    sayHi() {
        console.log(this.name);
    }
};

user.sayHi();

//A calculator that reads two values and saves them as object properties, sum and multiply the value
let calculator = {
     read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
     },

     sum() {
         return this.a + this.b;
     },
    
     mul() {
         return this.a * this.b;
     }
};

//Ladder

let ladder = {
    step: 0,

    up() {
        this.step++;
        return this;
    },

    down() {
        this.step--;
        return this;
    },

    showStep() {
        alert(this.step);
        return this;
    }
};

//Constructor, operator 'new'

function accountUser(name, password) {
    this.name = name;
    this.password = password;

        console.log(`User name is ${this.name} with password ${this.password}`);
};

let Brian = new accountUser('Brian', 'badguysrules22');



// Classes: constructor

class Product {
    constructor(pick, load, transfer) {
        this.pick = pick;
        this.load = load;
        this.transfer = transfer;
    }
    
} 

class Goods extends Product {
    constructor(pick, load, transfer) {
        super(pick, load, transfer)
    }
    information() {
        console.log(`Every morning marketers picks up product ${this.pick} and then loads it in a ${this.load}, 
        and then eventually transfers it to ${this.transfer}`);
    }
}

const polystar = new Goods('polystar', 'car', 'customer');
