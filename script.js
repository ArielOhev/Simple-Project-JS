const img = document.querySelector(".dice");
const Roll = document.querySelector(".roll");
const player1 = document.getElementById("PLAYER--1");
const player0 = document.getElementById("PLAYER--0");
const score0 = document.querySelector(".score--0");
const score1 = document.querySelector(".score--1");
const current1 = document.getElementById("current--1");
const current0 = document.getElementById("current--0");
const Hold = document.querySelector(".hold");
const win = document.getElementById("winning")




let score,current;
let active_player = document.querySelector(".active");
active_player = active_player.id.charAt(active_player.id.length-1);
let current_0 =0;
let current_1 =0;


let playing = true;


function switchPlayer() {
  if (active_player === 1) {
    player0.classList.add('active');
    player1.classList.remove('active');
    active_player=0;
  } 
  else 
  {
    player1.classList.add('active');
    player0.classList.remove('active');
    active_player=1;
  }
}

function rollDice() {
  const dice = Math.trunc(Math.random() * 6) + 1;

  return dice;
}

Roll.addEventListener("click", function () {
  if (playing) {
    const dice = rollDice();
    img.src = `dice-${dice}.png`;
    if(dice!==1){
      if(active_player===1){
        current_1+=dice;
        score1.textContent = dice;
        current1.textContent = current_1;
      }
      else{
        current_0+=dice;
        score0.textContent = dice;
        current0.textContent=current_0;
      }
      
    }
    if (dice===1){
    if(active_player===1)
    {
      current_1=0;
      score1.textContent = 0;
      current1.textContent = current_1;

      
    }
    else{
      current_0=0;
      score0.textContent = 0;
      current0.textContent = current_0;

    }
    switchPlayer();
    }
    if(current0.innerHTML >= 20)
    {
      console.log("player 0 win");
      win.classList.add("win-page");
      win.textContent = "Player  0 win 🏆🥇";
      playing=false;
    }
    if(current1.innerHTML >= 20)
    {
      console.log("player 1 win");
      win.classList.add("win-page");
      win.textContent = "Player  1 win 🏆🥇";
      playing=false;

    }
    Hold.addEventListener("click",function () {
      active_player = (active_player!==1) ? 0 : 1 ;
      switchPlayer();

    });
  }

  else {
    console.log("Finish");
    
  }
});

