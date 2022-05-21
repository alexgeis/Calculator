DEFAULT_DISPLAY = 0;

let currentDisplay = DEFAULT_DISPLAY;

function setCalcDisplay(newDisplay) {
  currentDisplay = newDisplay;
  console.log(currentDisplay);
}

const calcDisplay = document.querySelector("#calc-display");

startBtn.onclick = () => runGame();
resetBtn.onclick = () => clearScore();
document.body.onkeydown = (e) => setCurrentKey(e.key);

//listen for keyDown events to capture key value event.key

let words = ["Javascript", "concatenation", "recursive"];

function runGame() {
  renderWord();
  startTimer();
  /*
DONE -start timer
-pull word from array
-.split("") to create array from string
-modify word with random blanks
--number of blanks =
word.length < 6 = 2
word.length < 10 = 3
word.length < 15 = 4
word.length > 15 = 5
--Math.floor(Math.random()*word.length-1) <- have to do this for amount of blanks
--replace random indecies of word with blanks
--.join(" ")

*/
}

function renderWord() {
  //choose word -> make into array
  const randomWordIndex = Math.floor(Math.random() * (words.length - 1));
  let gameWordArr = words[randomWordIndex].split(""); // ["j","a",etc.]
  //determine number of blanks needed
  let blanks = 0
  gameWordArr.length < 6 ? blanks = 2 :
  gameWordArr.length < 10 ? blanks = 3 :
  gameWordArr.length < 14 ? blanks = 4 :
  blanks = 5
  //generate random indeces to replace with blanks - max 5 needed
  const randomBlankIndex1 = Math.floor(Math.random()*(gameWordArr.length-1))  
  const randomBlankIndex2 = Math.floor(Math.random()*(gameWordArr.length-1))  
  const randomBlankIndex3 = Math.floor(Math.random()*(gameWordArr.length-1))  
  const randomBlankIndex4 = Math.floor(Math.random()*(gameWordArr.length-1))  
  const randomBlankIndex5 = Math.floor(Math.random()*(gameWordArr.length-1)) 
  if ()
  

  //iterate over gameWordArr and replace values at random indeces with 
  if (blanks ===5){
    const blankWordArr = gameWordArr.map((letter)=>{

    })
  }
  
}

function startTimer() {
  let timerInterval = setInteval(() => {
    currentCountdown--;
    timer.textContent = `${currentCountdown}`;

    if (currentCountdown === 1) {
      timerText.textContent = `second remaining`;
    }

    if (currentCountdown === 0) {
      timerText.textContent = `seconds remaining`;
      clearInterval(timerInterval);
    }
  }, 1000);
}

function endGame() {
  //Win
  const newWins = currentWins++;
  setCurrentWins(newWins);

  //Lose
  const newLosses = currentLosses++;
  setCurrentLosses(newLosses);
}

window.onload = () => {
  setCurrentKey(DEFAULT_KEY);
  setCurrentWins(DEFAULT_WINS);
  setCurrentLosses(DEFAULT_LOSSES);
  setCurrentCountdown(DEFAULT_COUNTDOWN);
};
