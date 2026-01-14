// YOUR CODE HERE
console.log("Script Running.");
const switch1 = document.querySelector("#switch1");
const switch2 = document.querySelector("#switch2");
const switch3 = document.querySelector("#switch3");
const switch4 = document.querySelector("#switch4");
const switch5 = document.querySelector("#switch5");
const switch6 = document.querySelector("#switch6");
const switch7 = document.querySelector("#switch7");
const switch8 = document.querySelector("#switch8");
const switch9 = document.querySelector("#switch9");

const light1 = document.querySelector("#lightbulb1")
const light2 = document.querySelector("#lightbulb2")
const light3 = document.querySelector("#lightbulb3")
const light4 = document.querySelector("#lightbulb4")
const light5 = document.querySelector("#lightbulb5")
const light6 = document.querySelector("#lightbulb6")
const light7 = document.querySelector("#lightbulb7")
const light8 = document.querySelector("#lightbulb8")
const light9 = document.querySelector("#lightbulb9")
const master = document.querySelector("#master")
const restart = document.querySelector("#restart")

//switch buddies? (singles, pairs, and trios)
const change38 = () => {

    light3.classList.toggle("active");
    light8.classList.toggle("active");
}
switch1.addEventListener("click", change38);


const change17 = () => {

    light1.classList.toggle("active");
    light7.classList.toggle("active");
}
switch2.addEventListener("click", change17);

const change468 = () => {

    light4.classList.toggle("active");
    light6.classList.toggle("active");
    light8.classList.toggle("active");
}
switch3.addEventListener("click", change468);

const change29 = () => {

    light2.classList.toggle("active");
    light9.classList.toggle("active");
}
switch4.addEventListener("click", change29);


const change52 = () => {

    light5.classList.toggle("active");
    light2.classList.toggle("active");
}
switch5.addEventListener("click", change52);


const change14 = () => {

    light1.classList.toggle("active");
    light4.classList.toggle("active");
}
switch6.addEventListener("click", change14);

const change23 = () => {

    light2.classList.toggle("active");
    light3.classList.toggle("active");
}
switch7.addEventListener("click", change23);

const change59 = () => {

    light5.classList.toggle("active");
    light9.classList.toggle("active");
}
switch8.addEventListener("click", change59);

const change67 = () => {

    light6.classList.toggle("active");
    light7.classList.toggle("active");
}
switch9.addEventListener("click", change67);

//master switch
const masterSwitch = () => {
    light1.classList.toggle("active");
    light2.classList.toggle("active");
    light3.classList.toggle("active");
    light4.classList.toggle("active");
    light5.classList.toggle("active");
    light6.classList.toggle("active");
    light7.classList.toggle("active");
    light8.classList.toggle("active");
    light9.classList.toggle("active");
}
master.addEventListener("click", masterSwitch);

//restart button

const restartButton = () => {
    light1.classList.remove("active");
    light2.classList.remove("active");
    light3.classList.remove("active");
    light4.classList.remove("active");
    light5.classList.remove("active");
    light6.classList.remove("active");
    light7.classList.remove("active");
    light8.classList.remove("active");
    light9.classList.remove("active");

    switch1.checked=false;
    switch2.checked=false;
    switch3.checked=false;
    switch4.checked=false;
    switch5.checked=false;
    switch6.checked=false;
    switch7.checked=false;
    switch8.checked=false;
    switch9.checked=false;
}
restart.addEventListener("click", restartButton);


//randomize (SPICY)

const randomize = () =>{
    if (switch.checked){

    }
}

