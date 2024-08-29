var errors = 0;
var cardList = [
    "darkness",
    "double",
    "fairy",
    "fighting",
    "fire",
    "grass",
    "lightning",
    "metal",
    "psychic",
    "water"
];
var board = [];
var cardsOfBoard = [];
var returnedCards = [];
var hideOnNextReveal = false;
var previousRevealedCard;
var canRevealCards = true;

window.onload = function(){
    var createdCards = [];
    for(let i = 0; i < 20; i++){
        let card = document.createElement("img");
        card.src = "sprites/back.jpg";
        card.addEventListener("click", cardClick);
        card.id = i;
        document.getElementById("board").append(card);
        cardsOfBoard.push(card);
        
        var cardIndex = getRandomCardIndex();
        while(createdCards.includes(cardIndex)){
            cardIndex = getRandomCardIndex();
        }
        board.push(cardList[cardIndex])
        createdCards.push(cardIndex);
        if(i == 9){
            createdCards = [];
        }
    }
}

function cardClick(){
    if(canRevealCards){
        this.src = "sprites/" + board[this.id] + ".jpg";
        if(previousRevealedCard){
            if(previousRevealedCard == board[this.id]){
                returnedCards.push(board[this.id])
            }else{
                errors++;
                document.getElementById("errors").innerText = errors;
            }
            
            canRevealCards = false;
            setTimeout(hideCards, 1000);
            previousRevealedCard = undefined;
        }else{
            previousRevealedCard = board[this.id];
        }
    }
}
function hideCards(){
    for(let i = 0; i < 20; i++){
        if(!(returnedCards.includes(board[i]))){
            cardsOfBoard[i].src = "sprites/back.jpg";
        }
    }
    canRevealCards = true;
}
function getRandomCardIndex(){
    return Math.floor(Math.random() * 10);
}