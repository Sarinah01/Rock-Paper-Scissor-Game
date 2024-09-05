let userscore=0;
let compscore= 0;

// Finding the score that is going to be alterred:
const userscorepara = document.querySelector(".user-score");
const compscorepara = document.querySelector(".comp-score");

//To trigger that any choice is getting clicked:
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");

const gencompchoice = () => {
    const options =["paper" , "scissor" , "rock"];
    const numgenerated = Math.floor(Math.random() * 3);
    return options[numgenerated];
};

const drawgame = () =>{
    console.log("Game was Draw");
    msg.innerHTML ="It's a Draw!";
    msg.style.backgroundColor ="#021526";
}



const showWinner = (userwin,userchoice ,compchoice) => {
   
 if(userwin === true){
    userscore++;
    userscorepara.innerHTML = userscore;
    console.log("You Win!");
    msg.innerHTML =`You Win..! Your ${userchoice} was beaten by ${compchoice}.!`;
    msg.style.backgroundColor ="rgb(51, 101, 51)";
 }
 else {
    compscore++;
    compscorepara.innerHTML = compscore;
    console.log("You Lose!");
    msg.innerHTML=`You Loose! Your ${compchoice} was beaten by ${userchoice}.!`;
    msg.style.backgroundColor ="rgb(175, 95, 95)";
   
 }
};

//To generte the choice of the computer:
//Creating a function playgame in which the userchoice and comp choice will be checked as well as
//it will generate random choice:

  const playGame = (userchoice) => {
  console.log("Your choice is ", userchoice);

 //Generate comp schoice:
 //Doing this in a function:
 const compchoice = gencompchoice();
 console.log("Comp choice is", compchoice);

  //For Draw Game:
  if(userchoice === compchoice){
    drawgame();
} 
else{
    let userwin = true;
    if(userchoice === "rock")
    { // comp will generate either paper,scissor
       userwin = compchoice === "paper" ? false:true;
    }
    else if( userchoice ==="paper"){
    userwin = compchoice === "scissor"? false:true;
    }
    else if( userchoice ==="scissor"){
        userwin = compchoice === "rock"? false:true;
        }
        showWinner(userwin, userchoice,compchoice);

}


 };



choices.forEach((choice) => {
    
    choice.addEventListener("click" , () => {
    let userchoice = choice.getAttribute("id");
    playGame(userchoice);
    });
});


