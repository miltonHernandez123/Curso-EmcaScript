const regex = /\b(Apple)+\b/g;
const fruit = "apple,banana, kiwi, orange,etc,etc";

for (const match of fruit.matchAll(regex)){
    console.log(match);
}