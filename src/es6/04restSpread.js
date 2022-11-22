//arrays destructuring

let fruit = ["apple","orange"];
let [a, b] = fruit;
console.log(a,fruit[1]);

//object destructuring

let user ={ userName:"oscar",age:23,};
let {userName, age } = user;
console.log(userName,age)

//spread operator
let person = {name:"oscar",age:34};
let country = "GUA";

let data = {...person,country};
console.log(data);

// rest

function sum(num, ...values){
    console.log(values);
    console.log (num + values[0]);
    return num + values[0];
}

sum(1,2,3,4,5,);