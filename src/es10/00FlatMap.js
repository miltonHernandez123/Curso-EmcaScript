const array = [1,3,4,5,[4,5,6,7,[1,4,6,8]]];
console.log(array.flat(3));

// flatMap

const array2 = [1,3,4,5,[4,5,6,7,[1,4,6,8]]];
console.log(array2.flatMap(v => [v,v * 2]));