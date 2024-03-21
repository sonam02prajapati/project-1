let result=document.getElementById("result");
function appendToResult(value) {
    result.value += value;
}

function clearResult() {
    result.value = "";
}

function calculaterResult() {
    var result = eval(document.getElementById("result").value);
    document.getElementById("result").value = result;
}