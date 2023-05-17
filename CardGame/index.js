let player={
    name:"Rahul",
    chips:100
}
let message="";
let cards=[]
let sum=0
let isAlive=false;
let hasBalckJack=false;
let cardel=document.getElementById("card")
let sumel= document.getElementById("sum")
let messageel=document.getElementsByClassName("message")[0]
let playerel=document.getElementById("player")
playerel.textContent=player.name+": $"+player.chips

function startGame(){
    isAlive=true;
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    cards=[firstCard,secondCard];
    sum=firstCard+secondCard;
    renderGame(); 
}

function getRandomCard(){
    let random=Math.floor((Math.random()*13))+1
    if(random===1){
        return 11;
    }
    else if(random>=11 && random<=13){
        return 10
    }
    else{
        return random
    }
}
 
function renderGame(){
   cardel.textContent="Cards: "; 
   for(let i=0;i<cards.length;i++){
    cardel.textContent+=cards[i]+" ";
   }
   sumel.textContent="Sum: "+sum;
    if(sum<=20){ 
        message="Do you want to draw a card? ";
    }
    else if(sum===21){
        message="You have got Blackjack!!";
        hasBalckJack=true;
    }
    else{
        message="You are out of the game!!";
        isAlive=false;
    }
    messageel.textContent=message;
}

function newCard(){
    if(isAlive===true&& hasBalckJack==false){
    let card=getRandomCard();
    sum+=card;
    cards.push(card);
    console.log(cards)
    renderGame();
    }
}