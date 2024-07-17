


var input1 = document.getElementById("number1");
var input2 = document.getElementById("number2");
var select = document.getElementById("select").value;
function calculate(){
    var no1 = document.getElementById("number1").value;
    var no2 = document.getElementById("number2").value;
    var select = document.getElementById("select").value;
    result = eval(no1 + select + no2);
    document.getElementById("result").value = result;
}



  

   