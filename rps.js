let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const message=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
    // rock paper scissors
};
const shoWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userscorepara.innerText=userScore;      
        message.innerText="You win!";
        message.style.backgroundColor="green";
    }
    else{
        compScore++;
        compscorepara.innerText=compScore
        message.innerText="Computer win!";
        message.style.backgroundColor="red";
    }
}
const drawGame=()=>{
    message.innerText="The game was Draw. Play again";
    message.style.backgroundColor="white";
    message.style.color="black";
    message.style.border="2px solid black";
};
const playGame=(choiceId)=>{
    //generate computer choice
    const compChoice=genCompChoice()
    if(choiceId===compChoice){
        //draw-game
        drawGame();
    }
    else{
        let userWin=true;
        if(choiceId==="rock"){
            //scissors or paper
            userWin=compChoice==="paper"? false:true;
        }
        else if(choiceId==="paper"){
                //rock or scissors
                userWin = compChoice === "scissors" ? false:true;
        }else{
            //rock or paper
            userWin=compChoice==="rock" ? false:true;
        }
        shoWinner(userWin);
    }

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const choiceId=choice.getAttribute("id");
        playGame(choiceId);
    });
});
