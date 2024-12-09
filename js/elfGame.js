console.log('Elf game script loaded');

let gameInitialized = false;
let gameCompleted = false;

const elfMovementAudio = new Audio('images/elf/audio/elfsinging.mp3');
const presentAudio = new Audio('images/elf/audio/present.mp3');

elfMovementAudio.loop = true;
elfMovementAudio.volume = 0.5;
presentAudio.volume = 0.7;

function initializeElfGame() {
    const elf = document.createElement('div');
    elf.className = 'game-elf';
    
    const messageCloud = document.createElement('div');
    messageCloud.className = 'message-cloud';
    messageCloud.innerHTML = `
        <p>Would you like to play a mini game?</p>
        <button class="game-btn yes-btn">Sure!</button>
        <button class="game-btn no-btn">No</button>
    `;
    
    document.body.appendChild(elf);
    document.body.appendChild(messageCloud);

    let isGameActive = false;
    let gameTimer = null;
    let timeLeft = 15;

    document.querySelector('.yes-btn').addEventListener('click', startGame);
    document.querySelector('.no-btn').addEventListener('click', () => {
        messageCloud.remove();
        elf.remove();
    });

    function startGame() {
        messageCloud.remove();
        isGameActive = true;
        
        elf.style.top = '113px';
        elf.style.left = '30px';
        elf.style.display = 'block';
        elf.style.opacity = '1';

        const box = document.createElement('div');
        box.className = 'treasure-box';
        box.style.backgroundImage = 'url("/images/elf/box1.png")';
        document.body.appendChild(box);

        const timer = document.createElement('div');
        timer.className = 'game-timer';
        document.body.appendChild(timer);

        let countdown = 3;
        timer.textContent = countdown;
        
        const countInterval = setInterval(() => {
            countdown--;
            if (countdown > 0) {
                timer.textContent = countdown;
            } else if (countdown === 0) {
                timer.textContent = 'GO!';
            } else {
                clearInterval(countInterval);
                startGameplay();
            }
        }, 1000);
    }

    function startGameplay() {
        const path = document.createElement('div');
        path.className = 'zigzag-path';
        document.body.appendChild(path);

        gameTimer = setInterval(() => {
            timeLeft--;
            document.querySelector('.game-timer').textContent = timeLeft;
            
            if (timeLeft <= 0) {
                endGame(false);
            }
        }, 1000);

        document.addEventListener('keydown', moveElf);
    }

    function moveElf(e) {
        if (!isGameActive) return;

        if (!elfMovementAudio.playing) {
            elfMovementAudio.play();
        }

        const currentLeft = parseInt(elf.style.left);
        const currentTop = parseInt(elf.style.top);
        const step = 10;

        switch(e.key) {
            case 'ArrowLeft':
                elf.style.left = `${currentLeft - step}px`;
                break;
            case 'ArrowRight':
                elf.style.left = `${currentLeft + step}px`;
                break;
            case 'ArrowUp':
                elf.style.top = `${currentTop - step}px`;
                break;
            case 'ArrowDown':
                elf.style.top = `${currentTop + step}px`;
                break;
        }

        checkCollision();
    }

    function checkCollision() {
        const box = document.querySelector('.treasure-box');
        const elfRect = elf.getBoundingClientRect();
        const boxRect = box.getBoundingClientRect();

        if (elfRect.right > boxRect.left && 
            elfRect.left < boxRect.right && 
            elfRect.bottom > boxRect.top && 
            elfRect.top < boxRect.bottom) {
            endGame(true);
        }
    }

    function endGame(won) {
        isGameActive = false;
        clearInterval(gameTimer);
        elfMovementAudio.pause();
        elfMovementAudio.currentTime = 0;
        
        if (won) {
            const box = document.querySelector('.treasure-box');
            
            box.style.backgroundImage = 'url("/images/elf/box2.png")';
            setTimeout(() => {
                box.style.backgroundImage = 'url("/images/elf/box3.png")';
                box.classList.add('center-box');
                
                presentAudio.play();
                
                setTimeout(() => {
                    box.classList.add('fade-out');
                    
                    setTimeout(() => {
                        showCongratulations();
                    }, 1000);
                }, 1000);
            }, 1000);
        }
    }

    function showCongratulations() {
        const congratsMessage = document.createElement('div');
        congratsMessage.className = 'congrats-message';
        congratsMessage.innerHTML = `
            <h2>Congratulations!</h2>
            <p>You've won a 30% Coupon</p>
            <p class="coupon-code" role="button" tabindex="0">KING</p>
        `;
        document.body.appendChild(congratsMessage);

        const couponCode = congratsMessage.querySelector('.coupon-code');
        couponCode.addEventListener('click', () => {
            presentAudio.pause();
            presentAudio.currentTime = 0;
            congratsMessage.classList.add('fade-out');
            setTimeout(() => {
                congratsMessage.remove();
                gameCompleted = true;
                gameInitialized = false;
                document.querySelector('.game-elf')?.remove();
                document.querySelector('.treasure-box')?.remove();
                document.querySelector('.zigzag-path')?.remove();
                document.querySelector('.game-timer')?.remove();
            }, 500);
        });
    }
}

window.addEventListener('load', () => {
    if (!gameInitialized && !gameCompleted) {
        console.log('Page loaded, waiting 15 seconds to start elf game');
        setTimeout(() => {
            if (!gameInitialized && !gameCompleted) {
                console.log('Starting elf game after 15 seconds');
                initializeElfGame();
                gameInitialized = true;
            }
        }, 42000);
    }
});

document.addEventListener('lostPresentDisappeared', () => {
    if (!gameInitialized) {
        console.log('Lost present disappeared, starting elf game');
        initializeElfGame();
        gameInitialized = true;
    }
});

document.addEventListener('keyup', (e) => {
    if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
        elfMovementAudio.pause();
        elfMovementAudio.currentTime = 0;
    }
});