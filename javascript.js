//Variable Declaration
var x = 0;
var y = 0;
var z = document.getElementsByClassName("operators").value;
console.log(x)
console.log(y)
console.log(z)

document.getElementsByClassName("numbers").onclick = function declareFirstNum() {
    const firstNum = document.getElementsByClassName("numbers");
    x = firstNum[0];
    // x += document.getElementsByClassName("numbers").value;
};
document.getElementsByClassName("operators").onclick = function declareOperator() {
    z = document.document.getElementsByClassName("operators").value;
};
y += document.getElementsByClassName("numbers").value;


document.getElementById("equals").onclick = function calculate() {
    document.getElementById('sumBox').innerHTML = x + z + y;

    console.log(x)
    console.log(y)
    console.log(z)
}
    ;


// equal.addEventListener("click", calculate(x, y, z));

//OPERATE Function



/*
get user input as variable
    -> declare new number after press on operator
call function on "=" press 
function creates object

*/