/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores,roundScore,activePlayer,win,prev,limit;

init();

function nextplayer(){
  prev=0;
  document.querySelector('#current-'+activePlayer).textContent=0;
  document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
  activePlayer===0 ? activePlayer=1 : activePlayer=0;
  document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
  roundScore=0;
}
document.querySelector('.btn-roll').addEventListener('click',function(){
  if(win===true)return;
  var dice = Math.floor(Math.random()*6+1);

  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display='block';
  diceDOM.src='dice-'+dice+'.png';
  if(dice!=1){
    if(prev===6 && dice===6){
      scores[activePlayer]=0;
      document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
      nextplayer();
      return;
    }
    roundScore+=dice;
    prev=dice;
    document.querySelector('#current-'+activePlayer).textContent=roundScore;
  }
  else{
    nextplayer();
  }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
  if(win)return;
  scores[activePlayer]+=roundScore;
  console.log(scores[activePlayer]);
  document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
  if(scores[activePlayer]>=limit){
    document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
    win=true;
    document.querySelector('#name-'+activePlayer).innerHTML="YOU WIN!!!";
    return;
  }
  nextplayer();
});

document.querySelector('.btn-new').addEventListener('click',init);
function init(){
    scores=[0,0];
    var x=prompt("Please enter the wining number","25");
    limit=Number(x);
    activePlayer=0;
    prev=0;
    roundScore=0;
    win=false;

    document.querySelector('.dice').style.display='none';
    document.getElementById('score-0').textContent=0;
    document.getElementById('score-1').textContent=0;
    document.getElementById('current-0').textContent=0;
    document.getElementById('current-1').textContent=0;
    document.getElementById('name-0').textContent='PLAYER 1';
    document.getElementById('name-1').textContent='PLAYER 2';
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
