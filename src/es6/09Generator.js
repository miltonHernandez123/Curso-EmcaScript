function* iterate(array){
    for(let value of array){
        yield value;
    }
}

const it = iterate (["alias","josue","miguel ","estefany",]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);