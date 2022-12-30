// kocky ///////////////////////////
//definovanie základných premenných
let totalScore, roundScore, activePlayer, dice
newGame()
var inputNumber = 20
document.querySelector(".rollDice").addEventListener("click", function(){
    //1.generujem náhodné číslo
    var dice = Math.ceil(Math.random()*6)
    //2. zobraziť správny obrázok
    var diceElement = document.querySelector(".cubeImg")
    diceElement.style.display = "block"
    diceElement.src = "img/dice-"+ dice +".png"
    //3. prepnutie zobrazenia z formulára na hráčov
    document.querySelector(".myInput").style.display = "none"
    document.querySelector(".player0").style.display = "flex"
    document.querySelector(".player1").style.display = "flex"
    //4.vloženie zvuku
    if(mySound.getAttribute("src") == "img/soundOn.png"){
        playSongRoll ()
    }else{}
    //5. načítanie hodenej kocky hráčovi
    if(dice !== 1 ) {
        roundScore =roundScore + dice
        document.querySelector("#currentScore_"+activePlayer).textContent = roundScore
        // ak si už dosiahol ciel - tak si víťaz
        if(roundScore >= inputNumber){
            document.querySelector("#name_" + activePlayer).textContent = "vyhral si"
            let winStar = document.querySelector(".cubeImg")
            winStar.src = "img/star.gif"
            if(mySound.getAttribute("src") == "img/soundOn.png"){
                playSongWin ()
            }else{}
        }
    }  
    else{
        diceElement.style.display = "none"
        // prejdeme na iného hráča 
        nextPlayer() 
    }
})
// podrž skóre a prejdi na druhého  hráča
document.querySelector(".holderScore").addEventListener("click", function(){
    totalScore[activePlayer] = totalScore[activePlayer] + roundScore
    document.querySelector("#totalScorePlayer_" + activePlayer).textContent = totalScore[activePlayer]
    if(totalScore[activePlayer]>= inputNumber){
            document.querySelector("#name_" + activePlayer).textContent = "vyhral si"
            let winStar = document.querySelector(".cubeImg")
            winStar.src = "img/star.gif"
            if(mySound.getAttribute("src") == "img/soundOn.png"){
                playSongWin ()
            }else{}
        }else{
        nextPlayer()
    }
})
//nová hra keď stlačíš
document.querySelector(".newGame").addEventListener("click",newGame )

// vyplnenie a submitnutie  vstupov
document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault()
    document.querySelector(".myInput").style.display = "none"
    document.querySelector(".player0").style.display = "flex"
    document.querySelector(".player1").style.display = "flex"
    document.querySelector("#firstPlayer").textContent = event.target.elements.fname.value
    document.querySelector("#secondPlayer").textContent = event.target.elements.sname.value
    inputNumber = document.querySelector("#inputNumber").value 
    document.querySelector("#count").innerHTML = "Ak nahráš " +event.target.elements.inputNumber.value + " bodov, si víťaz"
})

