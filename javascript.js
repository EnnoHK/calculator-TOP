//Variable Declaration
var firstNumber
var secondNumber
var op
var displayValue = 0
var sum
var savedOperator

function setDisplayValue(number) {
    if (displayValue == 0) {
        displayValue = number
    } else {
        displayValue = '' + displayValue + number
    }

    //sets the display value
    document.getElementById("sumBox").innerHTML = displayValue

    // console.log(displayValue)
}

function getOperator(operator) {
    console.log(displayValue)
    op = operator

    if (firstNumber == null) {
        firstNumber = parseInt(displayValue)
        console.log("first number: " + firstNumber)
        displayValue = 0
    }

    if (op && op !== "=") {
        savedOperator = op
    } else {
        secondNumber = parseInt(displayValue)
        console.log("second number: " + secondNumber)
        switch (savedOperator) {
            case "+":
                sum = firstNumber + secondNumber
                break;
            case "-":
                sum = firstNumber - secondNumber
                break;
            case "*":
                sum = firstNumber * secondNumber
                break;
            case "/":
                sum = firstNumber / secondNumber
                break;
            default:
                break;
        }
        sum = parseInt(sum)
        document.getElementById("sumBox").innerHTML = sum
        firstNumber = null
        secondNumber = null
    }


    // console.log(displayValue)
}

document.getElementById("clear").onclick = function clearDisplay() {
    displayValue = 0
    document.getElementById("sumBox").innerHTML = displayValue
}


document.getElementById("1").onclick = function declareOne() {
    setDisplayValue(1)
}
document.getElementById("2").onclick = function declareTwo() {
    setDisplayValue(2)
}
document.getElementById("3").onclick = function declareThree() {
    setDisplayValue(3)
}
document.getElementById("4").onclick = function declareFour() {
    setDisplayValue(4)
}
document.getElementById("5").onclick = function declareFive() {
    setDisplayValue(5)
}
document.getElementById("6").onclick = function declareSix() {
    setDisplayValue(6)
}
document.getElementById("7").onclick = function declareSeven() {
    setDisplayValue(7)
}
document.getElementById("8").onclick = function declareEight() {
    setDisplayValue(8)
}
document.getElementById("9").onclick = function declareNine() {
    setDisplayValue(9)
}
//Operators
document.getElementById("/").onclick = function declareDivision() {
    getOperator("/")
}
document.getElementById("x").onclick = function declareMultiplication() {
    getOperator("*")
}
document.getElementById("-").onclick = function declareMinus() {
    getOperator("-")
}
document.getElementById("+").onclick = function declarePlus() {
    getOperator("+")
}
document.getElementById("equals").onclick = function declareEquals() {
    getOperator("=")
}

// document.getElementById("equals").onclick = function setSum() {
//     document.getElementById("sumBox").innerHTML = toString(sum)
// }





























// //Declaration of the first number via declareFirstNum()
// document.getElementsByClassName("numbers").onclick = function declareFirstNum() {
//     const firstNum = document.getElementById("1");

//     x = firstNum[0];
//     // x += document.getElementsByClassName("numbers").value;
// };
// //
// document.getElementsByClassName("operators").onclick = function declareOperator() {
//     z = document.document.getElementsByClassName("operators").value;
// };
// y += document.getElementsByClassName("numbers").value;


// document.getElementById("equals").onclick = function calculate() {
//     document.getElementById('sumBox').innerHTML = x + z + y;

//     console.log(x)
//     console.log(y)
//     console.log(z)
// }
//     ;


// equal.addEventListener("click", calculate(x, y, z));

//OPERATE Function



/*
get user input as variable
    -> declare new number after press on operator
call function on "=" press 
function creates object

*/