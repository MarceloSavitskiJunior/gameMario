const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const end = document.querySelector('.game-end');

const jump = () => {
    mario.classList.add('jump');
};

const down = () => {
    mario.classList.remove('jump');
};

const endGame = () => {
    end.classList.add('end')
    if (!end.textContent.endsWith('!')) {
        let teste = document.createTextNode("Fim de Jogo!");
        end.appendChild(teste);
    }

    pipe.classList.remove('animation-pipe');
}

const checkCollision = () => {
    const rectMario = mario.getBoundingClientRect();
    const rectPipe = pipe.getBoundingClientRect();

    if (!(rectMario.right < rectPipe.left ||
        rectMario.left > rectPipe.right ||
        rectMario.bottom < rectPipe.top ||
        rectMario.top > rectPipe.bottom)) {
        endGame();
    } else {
        console.log('Elements are not touching or overlapping');
    }
};

const gameLoop = () => {
    
    checkCollision();
    requestAnimationFrame(gameLoop);
};

document.addEventListener('keydown', jump);
document.addEventListener('animationend', down);

gameLoop();
