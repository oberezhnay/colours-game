const colorBlocks = document.querySelectorAll(".color-block");
const stopBtn = document.querySelector(".stop-btn")
let gameOn = 0;
let gameInterval;
let  prev, curr;

document.getElementById('intro-screen').addEventListener('click', () => {
  const introScreen = document.getElementById('intro-screen');
  const gameContainer = document.getElementById('game-container');

  introScreen.style.transition = 'opacity 1s ease-out';
  introScreen.style.opacity = '0';

  setTimeout(() => {
    introScreen.style.display = 'none';
    gameContainer.style.display = 'block';
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  if ( !gameOn ){
    startGame();
    gameOn = 1;
  } else {
    stopGame();
    gameOn = 0;
  }
});

function startGame() {
  hideBlocks();
  gameInterval = setInterval(refreshColours, 1400);
  stopBtn.textContent = 'STOP';
}

function refreshColours(){
  hideBlocks();
  let size = randomizeSize();
  console.log(size, 'size')
  if (size == 1) {
    setColours();
  } else{
    setColour();
  }
}

function setColours() {
  let i = randomizeColor();
  let j = randomizeColor();

  while ( i === j ){
    j = randomizeColor();
  }

  colorBlocks[i].style.opacity= 1;
  colorBlocks[j].style.opacity= 1;
}

function setColour(){
  curr = randomizeColor();

  while (prev === curr){
    curr = randomizeColor();
  }
  let i = curr;
  prev = i;
  
  colorBlocks[i].style.opacity= 1;
}

function randomizeSize(){
  return Math.floor(Math.random()*2);
}

function randomizeColor(){
  return Math.floor(Math.random()*4);
}

function stopGame(){
  clearInterval(gameInterval);
  showBlocks();
  stopBtn.textContent = 'START';
  gameOn = 0;
}

function showBlocks(){
  colorBlocks.forEach(item => {
    item.style.opacity = 1;
  });
}

function hideBlocks(){
  colorBlocks.forEach(item => {
    item.style.opacity = 0;
  });
}