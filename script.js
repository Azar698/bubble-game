var timer = 60;
var score = 0;
var hitrn;
function increaseScoreVal(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function decreaseScoreVal(){
    score -= 10;
    document.querySelector("#scoreVal").textContent = score;
}
function getNewHit(){
     var hitrn = Math.floor(Math.random()*10);
     document.querySelector("#HitVal").textContent = hitrn;
}

function makeBubbble(){
    var clutter = ""
    for(var i = 1; i <= 102; i++){
        var rn = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${rn}</div>`
    }
    document.querySelector("#pannel-bottom").innerHTML = clutter;
}

function runTimer(){
    var TimerInt = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerValue").textContent = timer;
        }
        else{
            clearInterval(TimerInt);
            document.querySelector("#pannel-bottom").innerHTML = `
            <div class = "pop-up-container">
               <div class = "pop-up">
                   <img class = "game-over-png" src = "game-over.png" alt = "Game Over!!!"/>
               </div>
            </div>`;
        }
    },1000);
}

document.querySelector("#pannel-bottom").
addEventListener("click",function(dets){
    var clickedNum = console.log(Number(dets.target.textContent));
    if(clickedNum === hitrn){
        increaseScoreVal();
        makeBubbble();
        getNewHit();
    }
    else if(clickedNum !== hitrn){
        decreaseScoreVal();
        makeBubbble();
        getNewHit()
    }
})

runTimer();
makeBubbble();
getNewHit();




