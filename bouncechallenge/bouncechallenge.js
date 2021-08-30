var canvas=document.querySelector("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var l=canvas.getContext('2d');

var x=Math.floor(Math.random() * innerWidth);            
var y=Math.floor(Math.random() * innerHeight);           //circle coordinates
var sx=4;
var sy=-4;         //speed defining variables
var radius=25;
start();

function start(){                                 //animation part
    requestAnimationFrame(move);
    l.clearRect(0,0,innerWidth,innerHeight);      //clears pixels within the canvas
    l.beginPath();
    l.strokeStyle="black";
    l.arc(x,y,radius,0,Math.PI * 2,false);
    l.stroke();


if (radius + x > innerWidth)
sx=0-sx;

if (x - radius <0)
sx=0-sx;

if(y+radius>innerHeight)
sy=0-sy;

if(y- radius<0)
sy=0-sy;

x=x+sx;
y=y+sy;
}


    




