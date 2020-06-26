function getNum(num) {
    var result = document.getElementById("result");
    result.value += num;
}

function clearNum() {
    var result = document.getElementById("result");
    result.value = "";
}

function getResult() {
    var result = document.getElementById("result");
    result.value = eval(result.value);
}

function sqr() {
    var result = document.getElementById("result");
    result.value = Math.pow(result.value, 2);
}

function getSin() {
    var result = document.getElementById("result");
    result.value = Math.sin(result.value * Math.PI / 180).toFixed(3);
}

function getCos() {
    var result = document.getElementById("result");
    result.value = Math.cos(result.value * Math.PI / 180).toFixed(3);
}

function getTan() {
    var result = document.getElementById("result");
    result.value = Math.tan(result.value * Math.PI / 180).toFixed(3);
}

function squareRoot() {
    var result = document.getElementById("result");
    result.value = Math.sqrt(result.value);
}

function getInverseSin() {
    var result = document.getElementById("result");
    result.value = (Math.asin(result.value) * 180 / Math.PI).toFixed(3);
}

function getInverseCos() {
    var result = document.getElementById("result");
    result.value = (Math.acos(result.value) * 180 / Math.PI).toFixed(3);
}

function getInverseTan() {
    var result = document.getElementById("result");
    result.value = (Math.atan(result.value) * 180 / Math.PI).toFixed(3);
}

function backSpace() {
    var result = document.getElementById("result");
    var x = result.value;
    if (x.length > 0) {
        x = x.substring(0, x.length - 1);
        result.value = x;
    }
}
