var input= document.getElementById('input');
function display( element){
    input.value += element;
}

function clearInput() {
    input.value = "";
}

function calculator(){
    try{
        input.value = eval(input.value);
    }
catch(error){
    input.value= 'Error';
}
}
function delet(){
let remover=["input.value"];
let one = remover.pop();
input.value= one;
}
function delet() {
    let currentValue = input.value;
    let newValue = currentValue.substring(0, currentValue.length - 1);
    input.value = newValue;
}











