function rpsGame(yourchoice){
    //console.log(yourchoice);
    var humanChoice,botChoice;
    humanChoice=yourchoice.id;
    //console.log(humanChoice);
    botChoice=numberToChoice(randchoice());
    //console.log(botChoice);
    results=decidewinner(humanChoice,botChoice);
    //console.log(results);
    message=finalmessage(results);
    //console.log(message);
    rpsfrontend(yourchoice.id,botChoice,message);

}
function randchoice(){
    return Math.floor(Math.random()*3);
}
function numberToChoice(number){
    return ["rock","paper","scissor"][number];
}
function decidewinner(yourchoice,computerchoice){
    var rpsdatabase = {'rock':{'rock': 0.5 ,'paper': 0 ,'scissor': 1 },
                      'paper':{'rock': 1 ,'paper': 0.5 ,'scissor': 0 },
                      'scissor':{'rock': 0 ,'paper': 1 ,'scissor': 0.5 } 
                      };
var yourscore=rpsdatabase[yourchoice][computerchoice];
var computerscore=rpsdatabase[computerchoice][yourchoice];
return [yourscore,computerscore];
}

function finalmessage([yourscore,computerscore]){
    if(yourscore==0){
        return {'message':'You Lost!','color':'red'};
    }
    else if(yourscore==0.5){
        return{'message':'You Tied!','color':'blue'};

    }
    else{
        return{'message':'You Won!','color':'green'};
    }
}

function rpsfrontend(humanimagechoice,computer_imagechoice,finalmessage){
    var imagesdatabase={'rock':document.getElementById('rock').src,
    'paper':document.getElementById('paper').src,
    'scissor':document.getElementById('scissor').src};

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

     var humanDiv=document.createElement('div');
     var computerDiv=document.createElement('div');
     var messageDiv=document.createElement('div');
     humanDiv.innerHTML="<img src='"+ imagesdatabase[humanimagechoice] + "'height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>" 
     messageDiv.innerHTML="<h1 style='color:"+finalmessage['color']+"; font-size:60px;padding:30px;'>"+finalmessage['message']+"</h1>"
     computerDiv.innerHTML="<img src='"+ imagesdatabase[computer_imagechoice] + "'height=150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>" 

     document.getElementById('flex-box-rps-div').appendChild(humanDiv);
     document.getElementById('flex-box-rps-div').appendChild(messageDiv);

     document.getElementById('flex-box-rps-div').appendChild(computerDiv);



}