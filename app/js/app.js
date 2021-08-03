const buttons           = document.querySelectorAll('#button');
const rulesBtn          = document.querySelector('.rules-container');
const rules             = document.querySelector('.show-rules')
const player            = document.querySelector('.player');
const computer          = document.querySelector('.computer');
const gameContainer     = document.querySelector('.game-start');
const weaponContainer   = document.querySelector('.weapon');
const result            = document.getElementById('result')
const resultContainer   = document.querySelector('.result-container');
const playAgainBtn      = document.querySelector('.play-again');
let score               = document.getElementById('score');

scoreValue = 0


buttons.forEach(button => button.addEventListener('click', () => {

    console.log(button.className);
    const PlayerWeapon = button.className;
    const ComputerWeapon = getComputerInput()

    //render
    
    hideWeapon();
    createWeaponEl(PlayerWeapon, player);
    createWeaponEl(ComputerWeapon, computer)
    setTimeout(() => {
        
        checkWinner(PlayerWeapon, ComputerWeapon);
        score.textContent = `${scoreValue}`
      }, 1000);
    
}));

const getComputerInput = () => {

    let computerChoose = Math.random()
    console.log(computerChoose);

    if (computerChoose < 0.36) {

        return computerChoose = 'paper';
    } else if (computerChoose < 0.64) {

        return computerChoose = 'scissors'
    } else if (computerChoose < 1) {

        return computerChoose = 'rock'
    }
}


const createWeaponEl = (weapon, user) => {

    console.log(user.className);
    const WeaponEl = document.createElement('div')
    WeaponEl.className = weapon
    WeaponEl.id = 'versus'
    WeaponEl.innerHTML = `
        <span>
            <img src="images/icon-${weapon}.svg" alt="">
        </span>
        <h4>${user.className.toUpperCase()} PICKED</h4>
    `;

    
    console.log(WeaponEl);
    user.append(WeaponEl)
    
}

const hideWeapon = () => {

    weaponContainer.style.display = 'none';
    gameContainer.style.display = 'grid'

}


const checkWinner = (player, computer) => {

    if (player === computer) {
        resultContainer.style.display = 'block'
        result.innerHTML = `DRAW`
        
    } else if (player === 'paper' && computer === 'rock'||
        player === 'rock' && computer === 'scissors'||
        player === 'scissors' && computer === 'paper'
    ) {

        scoreValue++;
        resultContainer.style.display = 'block'
        result.innerHTML = `PLAYER WIN`

    } else {
        scoreValue--;
        resultContainer.style.display = 'block'
        result.innerHTML = `COMPUTER WIN`
        
    }

    rulesBtn.style.display = 'none'
}

const playAgain = () => {

    const computerChild = computer.querySelector('#versus')
    const playerChild = player.querySelector('#versus')
    computer.removeChild(computerChild)
    player.removeChild(playerChild);
    weaponContainer.style.display = 'grid';
    gameContainer.style.display = 'none'
    resultContainer.style.display = 'none'
    rulesBtn.style.display = 'block'
}





const showRules = () => {

    rules.classList.add('active')
}

const closeRules = (e) => {

    if (e.target.matches('.fa-times')){
        
        rules.classList.remove('active')
    }
}


rulesBtn.addEventListener('click', showRules);
rules.addEventListener('click', closeRules);
playAgainBtn.addEventListener('click', playAgain)