
// const change = document.querySelector
// ("#message");
// change.innerHTML = "WELLCOME";
// change.style.color = "blue";
// change.style.fontSize = "24px";
// change.style.fontWeight = "bold";


// const result = document.querySelector("#result");
// const input1 = document.querySelector("#myInput");

// function showInput() {
//     result.innerHTML = input1.value;
//     result.style.color = "green";
//     result.style.fontSize = "20px";
//     result.style.fontWeight = "bold";
//     input1.value = "";
// }


const container = document.querySelector("#container");
const title = document.querySelector("#mainTitle");
function changeColor() {
    container.style.backgroundColor = "lightblue";
    title.style.color = "red";
}



const num1 = document.querySelector("#num1");
const output = document.querySelector("#output");
function valueOut(){
    output.innerHTML = num1.value;
    output.style.color = "purple";
    output.style.fontSize = "22px";
    output.style.fontWeight = "bold";
    num1.value = "";
}


function submitB(){
    console.log("button-Clicked");
    
}


const first = document.querySelector("#first");
const second = document.querySelector("#second");
const span = document.querySelector("#sum");

function swapValues(){
    const num1 = Number(first.value);
    const num2 = Number(second.value);
   
    const total = num1 + num2;

    span.innerHTML = total;
}




const para = document.querySelector(".description");
para.innerHTML = "updated Successfully!";