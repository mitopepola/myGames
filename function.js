// funkcia na zmenu hráča v kockách po hode jednotky
function nextPlayer(){
    if(activePlayer === 0){
        activePlayer =1
    } else {
        activePlayer =0
    }
    roundScore = 0
    document.querySelector("#currentScore_0").textContent = 0
    document.querySelector("#currentScore_1").textContent = 0
    //document.querySelector(".cubeImg").style.display = "none"
    document.querySelector(".totalScore0").classList.toggle("active")
    document.querySelector(".totalScore1").classList.toggle("active")
    
}
// vynulovanie celej hry
function newGame(){
    
totalScore = [0,0]
roundScore = 0
activePlayer = 0
// vynulovanie vstupov
document.querySelector("#totalScorePlayer_0").textContent = 0
document.querySelector("#totalScorePlayer_1").textContent = 0
document.querySelector("#currentScore_0").textContent = 0
document.querySelector("#currentScore_1").textContent = 0
document.querySelector(".cubeImg").style.display = "none"

document.querySelector("#name_0").textContent = "skóre "
document.querySelector("#name_1").textContent = "skóre "

document.querySelector(".totalScore0").classList.add("active")
document.querySelector(".totalScore1").classList.remove("active")

}
// funkcia na prehatie hudby pri hode a pri výhre
let myAudioRoll = document.querySelector("#audio")
function playSongRoll(){
    myAudioRoll.play()
}
let myAudioWin = document.querySelector("#fanfary")
function playSongWin(){
    myAudioWin.play()
}

// funkcia na prepínanie zvuku - skopčené z itnetwork
var mySound

window.onload = function(){ 
    mySound = document.getElementById("soundMutte")
    mySound.onclick = myToggleSound

function myToggleSound (){
    if(mySound.getAttribute("src") == "img/soundOn.png"){
        mySound.src =  "img/soundOff.png"
        document.querySelector("#soundMutte").classList.add("muted")
    }else{
        mySound.src =  "img/soundOn.png"
        document.querySelector("#soundMutte").classList.remove("muted")
    }   
}
}
