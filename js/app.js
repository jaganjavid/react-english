

// Var

// var, let, const

// let val;

// var name = "Jagan";

// name = "Javid";

// val = "Jagan";

// val = "Javid";

// const name = "Jagan";


// Data Types

// primitive types holds a single value

// const name = "Jagan";
// const age = 26;
// const hasKids = false;
// let undef;
// const nothing = null;

// Reference Types

// const arr = [1,2,3,"Jagan", true, [1,2,3]];

// const object = {
//     name:"Jagan",
//     age: 26,
//     email:"jaganjavid@gmail.com"
// }


// console.log(object.name);
// console.log(typeof object);

// Function Statement
function sum(x, y){
    return x + y;
    
}

console.log(sum(5,5));

// Function expression

const getName = function(firstName, lastName){
    return firstName + " " + lastName;
}

console.log(getName("Jagan", "Javid"));