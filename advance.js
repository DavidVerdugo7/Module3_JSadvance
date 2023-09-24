//====JS advance 1
console.log("==============1 A===============");
function makeCounter() {
  let currentCount = 0;
  return function () {
    currentCount++;
    console.log(currentCount);
    return currentCount;
  };
}

// let counter1 = makeCounter();

// console.log(counter1()); // 1
// console.log(counter1()); // 2

// let counter2 = makeCounter();

// console.log(counter2());
// console.log(counter2());

// console.log("==============1 B===============");

function makeCounter(startFrom = 0) {
  let currentCount = startFrom;
  return function () {
    currentCount++;
    console.log(currentCount);
    return currentCount;
  };
}

// let counter1 = makeCounter();
// let counter2 = makeCounter(5);
// let counter3 = makeCounter(10);

// console.log(counter1()); // 1
// console.log(counter2()); // 6
// console.log(counter3()); // 11

console.log("==============1 C===============");

function makeCounter(startFrom = 0, incrementBy = 1) {
  let currentCount = startFrom;
  return function () {
    currentCount += incrementBy;
    console.log(currentCount);
    return currentCount;
  };
}

let counter1 = makeCounter();
let counter2 = makeCounter(5);
let counter3 = makeCounter(10, 2);

console.log(counter1()); // 1
console.log(counter2()); // 6
console.log(counter3()); // 12

console.log("==============2 A===============");
// function delayMsg(msg) {
//   console.log(`This message will be printed after a delay: ${msg}`);
// }
// setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
// setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
// setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
// delayMsg("#4: Not delayed at all");

// 4: Not delayed it's just a regular function call,
// 3: Delayed by 0ms is scheduled with a 0 millisecond delay.
// 2: Delayed by 20ms  20 millisecond delay,
// 1: Delayed by 100ms  printed last,

console.log("==============2 B===============");
// const delayMsg = (msg) => {
//   console.log(`This message will be printed after a delay: ${msg}`);
// };

// setTimeout(() => delayMsg("#1: Delayed by 100ms"), 100);
// setTimeout(() => delayMsg("#2: Delayed by 20ms"), 20);
// setTimeout(() => delayMsg("#3: Delayed by 0ms"), 0);
// delayMsg("#4: Not delayed");

console.log("==============2 C===============");
function delayMsg(msg) {
  console.log(`This message will be printed after a delay: ${msg}`);
}

setTimeout(() => delayMsg("#1: Delayed by 100ms"), 100);
setTimeout(() => delayMsg("#2: Delayed by 20ms"), 20);
setTimeout(() => delayMsg("#3: Delayed by 0ms"), 0);
delayMsg("#4: Not delayed");

//  fifth test
setTimeout(() => delayMsg("#5: Delayed by 15 seconds"), 15000);

console.log("==============2 D===============");
function delayMsg(msg) {
  console.log(`This message will be printed after a delay: ${msg}`);
}

const timeout1 = setTimeout(() => delayMsg("#1: Delayed by 100ms"), 100);
const timeout2 = setTimeout(() => delayMsg("#2: Delayed by 20ms"), 20);
const timeout3 = setTimeout(() => delayMsg("#3: Delayed by 0ms"), 0);
delayMsg("#4: Not delayed");

// cancel the fifth test
const timeout5 = setTimeout(() => delayMsg("#5: Delayed by 15 seconds"), 15000);
clearTimeout(timeout5);

console.log("==============3 A===============");
function printMe() {
  console.log("printing debounced message");
}
printMe = debounce(printMe); //create this debounce function for a)
//fire off 3 calls to printMe within 300ms - only the LAST one should print, after1000ms of no calls
setTimeout(printMe, 100);
setTimeout(printMe, 200);
setTimeout(printMe, 300);
//===============================================
function debounce(func) {
  let timeoutId;

  return function () {
    clearTimeout(timeoutId);
    const args = arguments;
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, 1000);
  };
}

function printMe() {
  console.log("printing debounced message");
}

printMe = debounce(printMe);

setTimeout(printMe, 100); // ignored
setTimeout(printMe, 200); // ignored
setTimeout(printMe, 300); // Will execute after 1000ms

console.log("==============3 B===============");

function debounce(func, ms) {
  let timeoutId;

  return function () {
    clearTimeout(timeoutId);
    const args = arguments;
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, ms);
  };
}

function printMe() {
  console.log("printing debounced message");
}

const debouncedPrintMe = debounce(printMe, 1000);

setTimeout(debouncedPrintMe, 100);
setTimeout(debouncedPrintMe, 200);
setTimeout(debouncedPrintMe, 300);

console.log("==============4 A===============");
// function printFibonacci() {
//   let prev = 0;
//   let current = 1;

//   function getNextFibonacci() {
//     const next = prev + current;
//     console.log(next);
//     prev = current;
//     current = next;
//   }

//   console.log(1);
//   console.log(1);

//   setInterval(getNextFibonacci, 1000);
// }

// printFibonacci();

console.log("==============4  C===============");

function printFibonacci(limit) {
  let prev = 0;
  let current = 1;
  let count = 0;

  function getNextFibonacci() {
    const next = prev + current;
    console.log(next);
    prev = current;
    current = next;
    count++;

    if (count >= limit) {
      clearInterval(intervalId);
    }
  }

  console.log(1);
  console.log(1);

  const intervalId = setInterval(getNextFibonacci, 1000);
}

printFibonacci(10);
console.log("==============5  A===============");
let car = {
  make: "Porsche",
  model: "911",
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};
car.description(); //works
setTimeout(car.description, 200); //fails
//================================================
/*it works because the (this) keyword inside the description method refers to the car object.
but after setTimeout executes the function after the specified timeout, it doesn't retain the original context(car object) 
so this inside the function no longer refers to car.*/
console.log("==============5  B===============");
let carro = {
  make: "Porsche",
  model: "911",
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};

// Cclone
let newCar = Object.assign({}, carro);

newCar.year = 2023;

newCar.description();
console.log("==============5  C===============");
/* the newCar object is a clone of the car object, it became a separate and independent object.
 Changing the year property in the newCar object does not affect the original car object.*/
console.log("==============5  D===============");
// let carr = {
//   make: "Porsche",
//   model: "911",
//   year: 1964,
//   description() {
//     console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
//   },
// };

// const boundDescription = carr.description.bind(carr);

// setTimeout(boundDescription, 200);
console.log("==============5  E===============");
// let car1 = {
//   make: "Porsche",
//   model: "911",
//   year: 1964,
//   description() {
//     console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
//   },
// };

// const boundDescription = car1.description.bind(car1);

// setTimeout(boundDescription, 200);

// let newCar = Object.assign({}, car1);

// newCar.model = "Cayman";

// setTimeout(boundDescription, 400);

console.log("==============6  A===============");
// function multiply(a, b) {
//   console.log(a * b);
// }
// multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds
//==================================================

Function.prototype.delay = function (ms) {
  const originalFunction = this;

  return function (...args) {
    setTimeout(() => {
      originalFunction.apply(this, args);
    }, ms);
  };
};

function multiply(a, b) {
  console.log(a * b);
}

multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds
console.log("==============6  B===============");

function delay(ms) {
  return function (fn) {
    setTimeout(fn, ms);
  };
}

function add(a, b) {
  console.log(a + b);
}

const delayedAdd = delay(1000);

delayedAdd(() => {
  add(1, 2);
});
console.log("==============6  C===============");

function multiply(a, b, c, d) {
  console.log(a * b * c * d);
}

multiply.delay(500)(2, 3, 4, 5); // prints 120 after 500 milliseconds

console.log("==============7  A===============");
// function Person(name, age, gender) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
// }
// const person1 = new Person("James Brown", 73, "male");

// console.log("person1: " + person1); //prints person1: [object Object]
//===============================================================
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;

  this.toString = function () {
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
  };
}

const person1 = new Person("James Brown", 73, "male");
console.log("person1: " + person1.toString());
console.log("==============7  B===============");

function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;

  this.toString = function () {
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
  };
}

const person0 = new Person("James Brown", 73, "male");
const person2 = new Person("Alice Johnson", 28, "female");

// printing persons detalis
console.log("Person 1: " + person0.toString());
console.log("Person 2: " + person2.toString());
console.log("==============7  C===============");

function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;

  this.toString = function () {
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
  };
}

function Student(name, age, gender, cohort) {
  Person.call(this, name, age, gender);

  this.cohort = cohort;
}

// student
const student1 = new Student("Alice Johnson", 28, "female", "french");

// printing student details
console.log(
  "Student 1: " + student1.toString() + ", Cohort: " + student1.cohort
);
console.log("==============7  D===============");

function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

Person.prototype.toString = function () {
  return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
};

function Student(name, age, gender, cohort) {
  Person.call(this, name, age, gender);

  this.cohort = cohort;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.toString = function () {
  return `${Person.prototype.toString.call(this)}, Cohort: ${this.cohort}`;
};

//students
const studentA = new Student("Alice Johnson", 28, "female", "CS101");
const student2 = new Student("Bob Smith", 24, "male", "espanol");

// console
console.log("Student 1: " + studentA.toString());
console.log("Student 2: " + student2.toString());

console.log("==============8  A===============");
// class PrecisionClock extends DigitalClock0 {
//   constructor(prefix, precision = 1000) {
//     super(prefix);
//     this.precision = precision;
//   }

//   start() {
//     this.display();
//     this.timer = setInterval(() => this.display(), this.precision);
//   }
// }

// const myPrecisionClock = new PrecisionClock("my precision clock:", 500);
// myPrecisionClock.start();

console.log("==============8  B===============");
class AlarmClock extends DigitalClock {
  constructor(prefix, wakeupTime = "07:00") {
    super(prefix);
    this.wakeupTime = wakeupTime;
  }

  display() {
    super.display();
    const date = new Date();
    const currentTime = `${date.getHours()}:${date.getMinutes()}`;

    if (currentTime === this.wakeupTime) {
      console.log("Wake Up");
      this.stop();
    }
  }
}

const myAlarmClock = new AlarmClock("my alarm clock:", "08:30");
myAlarmClock.start();

console.log("==============9  A===============");
function randomDelay() {
  const minDelay = 1000;
  const maxDelay = 20000;
  const delay =
    Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

randomDelay().then(() => console.log("There appears to have been a delay."));
console.log("==============9  B===============");
function randomDelay() {
  const delay = Math.floor(Math.random() * 20000) + 1000;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (delay % 2 === 0) {
        resolve("Success: There appears to have been a successful delay.");
      } else {
        reject("Failure: There appears to have been a delay, but it failed.");
      }
    }, delay);
  });
}

randomDelay()
  .then((message) => console.log(message))
  .catch((error) => console.error(error));

console.log("==============9  C===============");

randomDelay()
  .then((message) => console.log(message))
  .catch((error) => console.error("Error:", error));
console.log("==============9  D===============");
function randomDelay() {
  const delay = Math.floor(Math.random() * 20000) + 1000;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (delay % 2 === 0) {
        resolve(
          `Success: There appears to have been a successful delay of ${delay} milliseconds.`
        );
      } else {
        reject(
          `Failure: There appears to have been a delay of ${delay} milliseconds, but it failed.`
        );
      }
    }, delay);
  });
}

randomDelay()
  .then((message) => console.log(message))
  .catch((error) => console.error("Error:", error));

console.log("==============10  A===============");
import fetch from "node-fetch";

globalThis.fetch = fetch;

async function fetchURLData(url) {
  try {
    const response = await fetch(url);

    if (response.status === 200) {
      return await response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    throw error;
  }
}

fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));

console.log("==============10  B===============");
//valid
fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log("Valid URL response:", data))
  .catch((error) => console.error("Valid URL error:", error.message));
//invalid
fetchURLData("https://example.com/nonexistent")
  .then((data) => console.log("Invalid URL response:", data))
  .catch((error) => console.error("Invalid URL error:", error.message));
console.log("==============10  C===============");
import fetch from "node-fetch";

globalThis.fetch = fetch;

async function fetchURLData(url) {
  try {
    const response = await fetch(url);

    if (response.status === 200) {
      return await response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    throw error;
  }
}

async function fetchAllURLs(urls) {
  try {
    const promises = urls.map((url) => fetchURLData(url));
    const responses = await Promise.all(promises);
    return responses;
  } catch (error) {
    throw error;
  }
}

const urlsToFetch = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/comments/1",
];

fetchAllURLs(urlsToFetch)
  .then((data) => console.log("Responses from all URLs:", data))
  .catch((error) => console.error("Error fetching URLs:", error.message));
