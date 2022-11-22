const button = document.getElementById("boton");

button.addEventListerner("click",async function (){
    const module = await import("./module.js");
    console.log(module);
    module.hello();
});