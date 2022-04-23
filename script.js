//additional features added - Speeding it up, Use a random secret pattern

// Global Variables
var pattern = [0, 0, 0, 0, 0, 0, 0, 0];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var clueHoldTime = 1000;

//Global Constants
const cluePauseTime = 333;
const nextClueWaitTime = 1000;

function randomNum()
{
  var random = Math.random();
  if(random < 0.25)
    {
      random = 1;
    }
  else if(random < 0.5)
    {
      random = 2;
    }
  else if(random < 0.75)
    {
      random = 3;
    }
  else
    {
      random = 4;
    }
  console.log("random number is " + random); //console check used to verify the random numbers generated
  return random;
}
function startGame()
{
  clueHoldTime = 1000;
  progress = 0;
  gamePlaying = true;
  for(var i = 0; i < pattern.length; i++)
    {
      pattern[i] = randomNum();
    }
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame()
{
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn)
{
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn)
{
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn)
{
  if(gamePlaying)
  {
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence()
{
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++)
  { // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue,delay,pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
    clueHoldTime -= 19.5;
  }
}

function guess(btn)
{
  console.log("user guessed: " + btn);
  if(!gamePlaying) // if the game is not being played, break out of this function
    {
      console.log("game is not being played");
      return;
    }
  if(btn != pattern[guessCounter]) // if the button does not match the correct guess in the pattern, then lose game
    {
      loseGame();
    }
  else // if it is the correct pattern, then continue with the game
    {
      if(guessCounter != progress) // if the turn is not over, then increase the guess counter
        {
          guessCounter++;
        }
      else // if the turn is over, then check if it is the last turn
        {
          if(progress == (pattern.length - 1))
            { // if the game is over, then win game
              winGame();
            }
          else
            {
              progress++;
              playClueSequence();
            }
        }
    }
}

function loseGame()
{
  stopGame();
  alert("Game Over. You lost.");
}

function winGame()
{
  stopGame();
  alert("Congrats! You won the game!");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
}
function playTone(btn,len)
{ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn)
{
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone()
{
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

