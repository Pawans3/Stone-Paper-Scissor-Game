let userscore=0;
let compscore=0;


const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const uscore=document.querySelector("#user-score");
const cscore=document.querySelector("#comp-score");



const gameChoice=()=>{
    let gChoice=["stone","paper","scisor"];
    let compChoice= Math.floor(Math.random()*3);
    return gChoice[compChoice];
}

let showWinner=(userWin,userchoice,compChoice)=>{
  if(userWin){
    userscore++;
    uscore.innerText=userscore;
    
    msg.innerText=`You Win! ${userchoice} beats ${compChoice}`;
    msg.style.color="yellow";
  }else{
    compscore++;
    cscore.innerText=compscore;
    
    msg.innerText=`You Loose!${compChoice} beats ${userchoice}`;
    msg.style.color="black";
  }
}

const playGame=(userchoice)=>{
    
    console.log("User Choice is",userchoice);
    const compChoice=gameChoice();
   

    if (userchoice===compChoice){
        msg.innerText="Game Draw!";
        msg.style.color="blue"; 
    } else{
        let userWin=true;
        if(userchoice==="rock"){
            userWin=compChoice==="paper"?false:true;

        }else if (userchoice==="paper") {
         userWin=compChoice==="scisor"?false:true;   
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userchoice,compChoice);
        
    }
}


choices.forEach((choices)=>{
    let userchoice= choices.getAttribute("id");
    choices.addEventListener("click",()=>{
        console.log("Choice is clicked",userchoice);
        playGame(userchoice);
    })
})