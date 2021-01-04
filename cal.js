
//function for displaying values
function dis(value)
{
document.getElementById("screen").value+=value;
 }
//function for evaluation
function solve()
{
let x = document.getElementById("screen").value
let y = eval(x)
document.getElementById("screen").value = y
}
//function for clearing the display
function clr(C)
{
document.getElementById("screen").value = ""
}



