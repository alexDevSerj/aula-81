canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
color="blue";

//canvas.getContext("2d").beginPath();
//canvas.getContext("2d").strokeStyle=color;
//canvas.getContext("2d").lineWidth=2;
//canvas.getContext("2d").arc(200,200,40,0,2*Math.PI);
//canvas.getContext("2d").stroke();

//ctx.beginPath();
//ctx.strokeStyle=color;
//ctx.lineWidth=2;
//ctx.arc(111,111,40,0,2*Math.PI);
//ctx.stroke();


//mouseX=e.clientX;
//mouseY=e.clientY;

//button=document.getElementById()
canvas.addEventListener("mousedown",mymousedown);


function mymousedown(e){
  mouseX=e.clientX-canvas.offsetLeft;
  mouseY=e.clientY-canvas.offsetTop;
  circle(mouseX, mouseY)
}
function circle(mouseX,mouseY){
  ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(mouseX,mouseY,40,0,2*Math.PI);
ctx.stroke();
}