const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
   if(userInput === "bomb"){
    return userInput;
  }
  if(userInput === "rock" || userInput === "paper" || userInput === "scissors"){
    return userInput;
  }else{
    console.log("error word, choice between this words rock, paper, scissors ");
  }
 
};

const getComputerChoice = () =>{
  let randomNumber=Math.floor(Math.random()*3);
  if(randomNumber === 0){
    return "rock";
  }else if(randomNumber === 1){
    return "paper";
  }else if(randomNumber === 2){
    return "scissors";
  }
}

const determineWinner = (userChoise, computerChoise)=>{
  if(userChoise === computerChoise){
    return "The game is a tie.";
  }
 
  if(userChoise === "rock"){
    if(computerChoise === "paper"){
      return "The computer won";
    }else{
      return "You won";
    }
  }
  if(userChoise === "paper"){
    if(computerChoise === "scissors"){
      return "The computer won";
    }else{
      return "You won";
    }
  }
  if(userChoise === "scissors"){
    if(computerChoise === "rock"){
      return "The computer won";
    }else{
      return "You won";
    }
  }
   if(userChoise === "bomb"){
    return "You won";
  }
}

const playGame = () =>{
  let userChoice = getUserChoice("paper");
  let computerChoice = getComputerChoice();
  console.log('You threw: '+userChoice);
  console.log('The computer threw: '+computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();
