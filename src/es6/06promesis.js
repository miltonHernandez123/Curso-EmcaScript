const anotherFunction = () => {
    return new Promise((resolve,reject) => {
        if(true){
            resolve("Heyyy");
        }
        else{
            reject("Haaaaa!");
        }
    })
}

anotherFunction()
 .then(response => console.log(response))
 .catch(err => console.log(err));