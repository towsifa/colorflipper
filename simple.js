var demo = document.getElementById("demo");
let abnormal = document.getElementById("abnormal");
let normal = document.getElementById("normal");
let abnormalColors = ["#f44336", "#e81e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a"];
let normalColors = ["red", "rgba(133,122,200)", "green", "orange", "blue", "pink", "skyblue", "purple", "black"];
var listOfColor = [];
function changeab(){
    listOfColor = abnormalColors;
}
function changen(){
    listOfColor = normalColors;
}
function changeColor(){
    let colorNow = listOfColor[Math.floor(Math.random() * listOfColor.length)];
    demo.innerHTML = colorNow;
    let mainColor = document.getElementById("main-color");
    mainColor.style.backgroundColor = colorNow;

}


