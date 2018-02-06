// With one Argument you can leave () in the arguments
var square = x =>  x * x;

// The above function can also be written in the expanded way like below, both work the same
var square2 = (x) => {
    var result = x * x;
    return result;
}

console.log(square(9));
console.log(square2(9));

// 'this' refers to the global binding and is not bound to the Arrow Functions
var user = {
    name : 'KD',
    sayHi: () => {
        // Here arguments refer to Global Keyword
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
};

// Basically if you are not using 'this' and 'argument' keywords, arrow functions can replace regular functions.

user.sayHi();
user.sayHiAlt(1,2,3);