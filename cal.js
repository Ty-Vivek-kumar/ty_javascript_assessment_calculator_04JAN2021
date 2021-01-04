///*let screen = document.getElementById('screen');
/*buttons = document.querySelectorAll('button');
for(item of buttons){
    item.addEventListener('click',(e) =>{
        buttontext = e.target.inner;
        console.log("Button trxt is ", buttontext);
        if(buttontext=='*'){
            buttontext = '*';
            screenvalue += buttontext;/
            screen.value += buttontext;
        } else if(){

        } else if(){

        } else if(){

        } else if(){

        } else if(){

        }

    })
}*/
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



