var  lastName = "david";
lastName = "oscar";
console.log(lastName);

let fruit = "apple";
fruit = "nuez";

const animal = "dog";
animal = "cat";

const fruits = () => {
    if(true){
        var fruit1 = "apple"; //function scope
        const fruit2 = "pear";// block scope
        let fruit3 = "banana";// block scope
    }
    console.log({
        fruit1,
        fruit2,
        fruit3
    });
}