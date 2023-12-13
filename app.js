var display = document.getElementsByName('display')[0];

function append(val) {
    display.value += val;
}

function calculate() {
    let result = eval(display.value);
    display.value = result;  
}

function clearDisplay() {
    display.value = '';
}

function del() {
    display.value = display.value.slice(0,-1);
}
