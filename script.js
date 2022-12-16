const myCards = saveDataCards ()
let cards = [{
    id:"a1",
    idRandom: "",
    cardKey: "aa1",
    status: "false",
    class: "cards",
    photo:"img/img1.jpg",
    
},{
    id:"a2",
    idRandom: "",
    cardKey: "aa2",
    status: "false",
    class: "cards",
    photo:"img/img2.jpg",
    
},{
    id:"a3",
    idRandom:"",
    cardKey:"aa3",
    status:"false",
    class: "cards",
    photo:"img/img3.jpg",
    
},{
    id:"a4",
    idRandom:"",
    cardKey:"aa4",
    status:"false",
    class: "cards",
    photo:"img/img4.jpg",
    
},{
    id:"a5",
    idRandom:"",
    cardKey:"aa1",
    status:"false",
    class: "cards",
    photo:"img/img1.jpg",
    
},{
    id:"a6",
    idRandom:"",
    cardKey:"aa2",
    status:"false",
    class: "cards",
    photo:"img/img2.jpg",
    
},{
    id:"a7",
    idRandom:"",
    cardKey:"aa3",
    status:"false",
    class: "cards",
    photo:"img/img3.jpg",
    
},{
    id:"a8",
    idRandom:"",
    cardKey:"aa4",
    status:"false",
    class: "cards",
    photo:"img/img4.jpg",
    
}]

// rozdanie pexesa
let newGame = document.querySelector(".arrayPexeso")
newGame.addEventListener("click", function(even){
    even.preventDefault()
    // priradenie náhodného čísla každej karte
    for(i = 0;i<cards.length; i++){
        cards[i].idRandom = Math.floor(Math.random()*1000)}
    // načítanie do LS
    cardsJSON = JSON.stringify(cards)
    localStorage.setItem("LScards", cardsJSON)
    // vynulovanie predchádzajúceho rozdania kariet
    let resetArray = document.querySelector(".vypis")
    resetArray.innerHTML = ""
    // - načítanie z LS
    cardsFromLS = JSON.parse(localStorage.getItem("LScards")) 
    console.log(cardsFromLS) 
    // zoradenie podľa idRandom - zavolanie funkcie
    sortsArray(cardsFromLS)
    // načítanie do LS
    cardsJSON = JSON.stringify(cardsFromLS)
    localStorage.setItem("LScards", cardsJSON)
    //-vypísanie do stránky pomocou for 
    for (let i = 0; i <cardsFromLS.length; i++){ 
        let button = document.createElement("button")
        button.classList.add("imgCard")
        button.innerHTML = cardsFromLS[i].cardKey
        
        //let img = document.createElement("img")
        //img.src = cardsFromLS[i].photo
        document.querySelector(".vypis").appendChild(button)
        
        console.log(button) 
        return button
    } 
    return button
})


//vymazanie políčka
    let reset = document.querySelector("#btnReset")
    reset.addEventListener("click", function(){
    let resetPexeso = document.querySelector(".vypis")
    resetPexeso.innerHTML = ""
    // vymazanie aj z localStorage
    cardsJSON = []
    localStorage.setItem("LScards", cardsJSON)
        
})
/*
let catchclick = document.querySelectorAll("img[id]")
catchclick.addEventListener("click", function(e){
    console.log("bolo kliknuté")
    let qqq = e.target.cardKey
    console.log(qqq)
})



// HLAVNA ČASŤ ---------------------------------------------
// zachytenie kliknutia 
let catchclick = document.querySelector(".imgCard")
catchclick.addEventListener("click",function(){
    console.log("ahoj")
})
/*
let catchclick = document.querySelector(".arrayPexeso")
catchclick.addEventListener("click", function(e){
    let click = e.target.idRandom
    //console.log("toto je id kliknutia"+click)  
    cardsFromLS = JSON.parse(localStorage.getItem("LScards")) 
    for (let i = 0; i <cardsFromLS.length; i++){ 

    //console.log(cardsFromLS[i].id) 
        if(click == cardsFromLS[i].idRandom){
            
            console.log("bolo kliknuté na index: " + i)
            //console.log(cardsFromLS[i].status)
            //console.log(cardsFromLS[i].id)
            //console.log(i)
            let click = cardsFromLS[i].cardKey
            console.log(click)
            cardsFromLS[i].status = "true"
            console.log(cardsFromLS[i].status)
            cardsFromLS[i].photo = "img/cube1.jpg"
            //console.log(cardsFromLS[i].photo)
            // načítanie do LS - zmenené hodnoty - má to byť až po druhom kliknutí
            cardsJSON = JSON.stringify(cardsFromLS)
            localStorage.setItem("LScards", cardsJSON)

            //vymazanie políčka

            let resetPexeso = document.querySelector(".arrayPexeso")
            resetPexeso.innerHTML = ""
            //vymazanie aj z localStorage
            //cardsJSON = []
            //localStorage.setItem("LScards", cardsJSON)

            //-vypísanie pomocou forEach po kliknutí
            cardsFromLS.forEach(function(event){
                let img = document.createElement("img")
                img.src = event.photo
                img.cardKey = event.cardKey
                img.idRandom = event.idRandom
                let src = document.querySelector(".arrayPexeso")
                src.appendChild(img)
                document.querySelector(".arrayPexeso").appendChild(img)
            })

        }else("")
    }
})
*/
// skuška ///////////////////////////
//function funkciaMyClick(){
//    document.querySelector
//}


// kocky ///////////////////////////
//definovanie základných premenných
let totalScore, roundScore, activePlayer, dice
newGame()

document.querySelector(".rollDice").addEventListener("click", function(){
    //1.generujem náhodné číslo
    var dice = Math.ceil(Math.random()*6)
    //2. zobraziť správny obrázok
    var diceElement = document.querySelector(".cubeImg")
    diceElement.style.display = "block"
    diceElement.src = "img/cube"+ dice +".jpg"
    //3. prepnutie zobrazenia z formulára na hráčov
    document.querySelector(".myInput").style.display = "none"
    document.querySelector(".player0").style.display = "flex"
    document.querySelector(".player1").style.display = "flex"
    //vloženie zvuku
    playSongRoll ()
    //5. načítanie hodenej kocky hráčovi
    if(dice !== 1 ) {
        roundScore =roundScore + dice
        document.querySelector("#currentScore_"+activePlayer).textContent = roundScore}
    else{
        // prejdeme na iného hráča 
        nextPlayer() 
    }
})

document.querySelector(".holderScore").addEventListener("click", function(){
    totalScore[activePlayer] = totalScore[activePlayer] + roundScore

    document.querySelector("#totalScorePlayer_" + activePlayer).textContent = totalScore[activePlayer]
    if(totalScore[activePlayer]>= 20){
            document.querySelector("#name_" + activePlayer).textContent = "vyhral si"
            let winStar = document.querySelector(".cubeImg")
            winStar.src = "img/star.gif"
            playSongWin ()
        }else{
        nextPlayer()
    }
})

document.querySelector(".newGame").addEventListener("click",newGame )




document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault()
    document.querySelector(".myInput").style.display = "none"
    document.querySelector(".player0").style.display = "flex"
    document.querySelector(".player1").style.display = "flex"
    document.querySelector("#firstPlayer").textContent = event.target.elements.fname.value
    document.querySelector("#secondPlayer").textContent = event.target.elements.sname.value
    document.querySelector("#count").innerHTML = "Ak nahráš " +event.target.elements.inputNumber.value + " bodov, si víťaz"
})

