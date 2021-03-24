
var allbuttons=document.getElementsByTagName('button');
var copybuttons=[];
for(var i=0;i<allbuttons.length ;i++){
    copybuttons.push(allbuttons[i].classList[1]);
}
console.log(copybuttons);





function buttonchange(button_look){
    if(button_look.value=='red')
    {
        buttonRed();
    }
    else if(button_look.value=='blue')
    {
        buttonBlue();

    }
    else if(button_look.value=='green'){
        buttonGreen();

    }
    else if(button_look.value=='yellow'){
    buttonYellow();
}
    else if(button_look.value=='reset'){
buttonReset();
}
    else if(button_look.value=='random'){
    random();
}
}

function buttonRed(){
    for(var i=0;i<allbuttons.length;i++){
        allbuttons[i].classList.remove(allbuttons[i].classList[1]);
        allbuttons[i].classList.add('btn-danger');
    }
}
function buttonBlue(){
    for(var i=0;i<allbuttons.length;i++){
        allbuttons[i].classList.remove(allbuttons[i].classList[1]);
        allbuttons[i].classList.add('btn-primary');
    }
}
function buttonGreen(){
    for(var i=0;i<allbuttons.length;i++){
        allbuttons[i].classList.remove(allbuttons[i].classList[1]);
        allbuttons[i].classList.add('btn-success');
    }
}
function buttonYellow(){
    for(var i=0;i<allbuttons.length;i++){
        allbuttons[i].classList.remove(allbuttons[i].classList[1]);
        allbuttons[i].classList.add('btn-warning');
    }
}
function buttonReset(){
    for(var i=0;i<allbuttons.length;i++){
        allbuttons[i].classList.remove(allbuttons[i].classList[1]);
        allbuttons[i].classList.add(copybuttons[i]);
    }
}

function random(){
var choices=['btn-primary','btn-danger','btn-success','btn-warning'];
for(var i=0;i<allbuttons.length;i++)
{
    var randomNumber=Math.floor(Math.random()*4);
    allbuttons[i].classList.remove(allbuttons[i].classList[1]);
    allbuttons[i].classList.add(choices[randomNumber]);

}

}