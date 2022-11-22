async function* anotherGenerator(){
    yield await promise.resolve(1);
    yield await promise.resolve(2);
    yield await promise.resolve(3);
}

const other = anotherGenerator();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log("Hello!");

async function arrayOfName(array){
    for await(let value of array){
        console.log(value)
    }
}

const name = arrayOfName(["oscar", "miguel","juan",]);
console.log("After");