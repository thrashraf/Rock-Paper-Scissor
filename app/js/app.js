const buttons = document.querySelectorAll('#button');
const rulesBtn = document.querySelector('.rules-container');
const rules = document.querySelector('.show-rules')
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');
const gameContainer = document.querySelector('.game-start');
const weaponContainer = document.querySelector('.weapon');
const result = document.getElementById('result')
const resultContainer = document.querySelector('.result-container');
const playAgainBtn = document.querySelector('.play-again');


buttons.forEach(button => button.addEventListener('click', () => {

    console.log(button.className);
    const PlayerWeapon = button.className;
    const ComputerWeapon = getComputerInput()

    //render
    
    hideWeapon();
    createWeaponEl(PlayerWeapon, player);
    createWeaponEl(ComputerWeapon, computer);
    checkWinner(PlayerWeapon, ComputerWeapon);

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

    const WeaponEl = document.createElement('div')
    WeaponEl.className = weapon
    WeaponEl.id = 'button'
    WeaponEl.innerHTML = `
        <span>
            <img src="/images/icon-${weapon}.svg" alt="">
        </span>
    `;

    
    user.removeChild()
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
        resultContainer.style.display = 'block'
        result.innerHTML = `Player WIN`
    } else {
        resultContainer.style.display = 'block'
        result.innerHTML = `Computer WIN`
    }
}

const playAgain = () => {

    
    weaponContainer.style.display = 'grid';
    gameContainer.style.display = 'none'
    resultContainer.style.display = 'none'
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