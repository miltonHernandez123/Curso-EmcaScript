function newUser (name,age,country){
    var name = name || "david";
    var age = age || 34;
    var country = country || "GUA";
    console.log(name,age,country);
}

newUser();
newUser("alexa",19,"MX");

function newAdmin (name = "oscar",age = 23, country = "GUA"){
    console.log(name,age,country);
}

newAdmin();
newAdmin("ana", 12,"ARG");