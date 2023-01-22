// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
    }

    //function to clear single value
function clearValue()
{
    document.getElementById("result").value
}    
    // This function display values
    function display(value) {
    document.getElementById("result").value += value;
    }
    
    // This function evaluates the expression and returns result
    function calc() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
    }