let scoreR1 = 0;
let scoreG1 = 0;
let scoreR2 = 0;
let scoreG2 = 0;
let dice = 0;
let actualPlayer = 1;

const newGame = document.getElementById('new-game');

const reinitialize = () => {
    scoreR1 = 0;
    scoreG1 = 0;
    scoreR2 = 0;
    scoreG2 = 0;
    dice = 0;
    actualPlayer = 1;

    document.getElementById('scoreR1').innerHTML = scoreR1;
    document.getElementById('scoreG1').innerHTML = scoreG1;
    document.getElementById('scoreR2').innerHTML = scoreR2;
    document.getElementById('scoreG2').innerHTML = scoreG2;
    document.getElementById('dice').innerHTML = dice;

}

reinitialize();

newGame.addEventListener('click', reinitialize);

const roll = document.getElementById('roll');

const rollTheDice = () => {
    dice = 1 + Math.floor(Math.random() * 6);
    document.getElementById('dice').innerHTML = dice;
   
    if (actualPlayer == 1) {
        scoreR1 += dice;
        document.getElementById('scoreR1').innerHTML = scoreR1;
    }
    else {
        scoreR2 += dice;
        document.getElementById('scoreR2').innerHTML = scoreR2;
    }
    if (dice == 1) {
        if (actualPlayer == 1) {
            scoreR1 = 0;
            document.getElementById('scoreR1').innerHTML = scoreR1;
            actualPlayer = 2;
        }
        else {
            scoreR2 = 0;
            document.getElementById('scoreR2').innerHTML = scoreR2;
            actualPlayer = 1;
        }
        alert('pas cette fois');
    }
}

roll.addEventListener('click', rollTheDice);


const hold = document.getElementById('hold');

const holdTheCurrent = () => {
    if (actualPlayer == 1) {
        scoreG1 += scoreR1;
        scoreR1 = 0;
        document.getElementById('scoreR1').innerHTML = scoreR1;
        document.getElementById('scoreG1').innerHTML = scoreG1;
        actualPlayer = 2;
    }
    else {
        scoreG2 += scoreR2;
        scoreR2 = 0;
        document.getElementById('scoreR2').innerHTML = scoreR2;
        document.getElementById('scoreG2').innerHTML = scoreG2;
        actualPlayer = 1;
    }
    if (scoreG1 >= 100){
        alert('joueur 1 gagne');
        reinitialize();
    } 
    if (scoreG2 >= 100){
        alert('joueur 2 gagne');
        reinitialize();
    } 
}

hold.addEventListener('click', holdTheCurrent);
