let lefts=50;
let tops=50;
let leftwards=true;
let topwards=true;
function moveballtop(){
    if(tops<470 && topwards){
        tops++;
    }else{
        topwards=false;
        if(tops<0)topwards=true;
        tops--;
    }
    ball.style.top=tops + "px";
}
function moveballefts(){
    if(lefts<470 && leftwards){
        lefts++;
    }else{
        leftwards=false;
        if(lefts<0)leftwards=true;
        lefts--;
    }
    ball.style.left=lefts + "px";
}
setInterval(moveballefts,2);
setInterval(moveballtop,5);

