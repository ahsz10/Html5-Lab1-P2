let red = document.getElementById("redRange");
let green = document.getElementById("greenRange");
let blue = document.getElementById("blueRange");
let text = document.getElementById("text");

function changeColor(){
    let color = 'rgb(' + red.value + ',' + green.value + ',' + blue.value + ')'
    text.style.color = color;
    document.getElementById("coloroutput").innerHTML = ': ' + color;
}

red.addEventListener('input',changeColor);
green.addEventListener('input',changeColor);
blue.addEventListener('input',changeColor);