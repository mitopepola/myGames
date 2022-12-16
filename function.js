/* funkcia načítajúca data z LS*/
const saveDataCards = function(){
    const dataCards = localStorage.getItem("myCards")

    if(dataCards !== null){
        return JSON.parse(dataCards)
    }else{
        return []
    }
}
/* čiže ak sa v -key - nachádzajú data, potom vo value sa nachádzajú hodnoty, ktoré sa vrátia v -dataCards*/


// zoradenie podľa idRandom 
let sortsArray = function(generalArray){
    generalArray.sort(function (a,b){
        if(a.idRandom < b.idRandom){
            return -1
        } else if (a.idRandom > b.idRandom){
            return 1
        } else{
            return 0
        }
    })
}

// funkcia na zmenu hráča v kockách
function nextPlayer(){
    if(activePlayer === 0){
        activePlayer =1
    } else {
        activePlayer =0
    }
    roundScore = 0
    document.querySelector("#currentScore_0").textContent = 0
    document.querySelector("#currentScore_1").textContent = 0
    document.querySelector(".cubeImg").style.display = "none"

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
