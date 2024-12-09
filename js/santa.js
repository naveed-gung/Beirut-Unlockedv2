let santaClicked = localStorage.getItem('santaClicked') === 'true';

document.addEventListener('DOMContentLoaded', function() {
    const santaWrapper = document.getElementById('santa-wrapper');
    const messageBubble = document.getElementById('message-bubble');
    let hasClicked = false;
    let animationTimeout;
    let lostPresentTimeout;
    let attempts = 0;  

    if (!santaWrapper || !messageBubble) {
        console.error('Required elements not found!');
        return;
    }

    function startSantaAnimation() {
        attempts++;
        santaWrapper.style.display = 'block';
        santaWrapper.style.animation = 'santaSlide 15s linear';
        
        lostPresentTimeout = setTimeout(() => {
            if (!hasClicked) {
                if (attempts === 1) {
                    santaWrapper.style.display = 'none';
                    santaWrapper.style.animation = 'none';
                    
                    setTimeout(() => {
                        santaWrapper.offsetHeight; 
                        startSantaAnimation();
                    }, 5 * 1000); 
                } else if (attempts === 2) {
                    showLostPresentMessage();
                }
            }
        }, 15000);
    }

    function showLostPresentMessage() {
        const lostMessage = document.querySelector('.lost-present-message');
        if (!lostMessage) {
            console.error('Lost present message element not found!');
            return;
        }
        
        lostMessage.style.display = 'block';
        
        santaWrapper.style.display = 'none';
        santaWrapper.style.animation = 'none';
        
        setTimeout(() => {
            lostMessage.style.display = 'none';
        }, 3000);
    }

    setTimeout(startSantaAnimation, 1000);
    
    santaWrapper.addEventListener('click', function() {
        if (hasClicked) return;
        hasClicked = true;
        
        clearTimeout(lostPresentTimeout);

        santaWrapper.style.animationPlayState = 'paused';

        const santa = document.getElementById('santa');
        santa.style.animation = 'shake 0.5s ease-in-out';
        
        messageBubble.innerHTML = `
            <div class="message-content">
                <h3 style="color: #EEEBDD; margin-bottom: 10px;">🎄 Congratulations! 🎄</h3>
                <p style="color: #EEEBDD; margin-bottom: 15px;">You have won 60% discount on our Website!</p>
                <div class="coupon-code">
                    <span style="color: #EEEBDD;">Coupon Code: </span>
                    <strong style="color: #EEEBDD;">N G</strong>
                </div>
                <button onclick="hideSantaMessage(event)">
                    Close
                </button>
            </div>
        `;
        
        messageBubble.style.display = 'block';
        localStorage.setItem('santaClicked', 'true');
    });
});

function hideSantaMessage(event) {
    event.stopPropagation();
    const messageBubble = document.getElementById('message-bubble');
    const santaWrapper = document.getElementById('santa-wrapper');
    
    messageBubble.style.display = 'none';
    
    santaWrapper.style.animation = 'santaSlideOut 2s ease-in-out forwards';
    santaWrapper.style.animationPlayState = 'running';
    
    setTimeout(() => {
        santaWrapper.style.display = 'none';
    }, 2000);
}

const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: rotate(0deg); }
        25% { transform: rotate(-10deg); }
        75% { transform: rotate(10deg); }
    }

    @keyframes santaSlideOut {
        0% {
            right: ${window.getComputedStyle(document.getElementById('santa-wrapper')).right};
            transform: translate(50%, -50%);
        }
        100% {
            right: -110%;
            transform: translate(0, -50%);
        }
    }

    .lost-present-message {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #EEEBDD;
        padding: 30px;
        border-radius: 15px;
        text-align: center;
        z-index: 10001;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        animation: messageFadeIn 0.5s ease-out;
        border: 3px solid #CE1212;
    }

    .lost-present-message h3 {
        color: #CE1212;
        font-size: 2rem;
        margin-bottom: 15px;
        font-weight: bold;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
    }

    .lost-present-message p {
        color: #1B1717;
        font-size: 1.5rem;
        font-weight: 500;
    }

    @keyframes messageFadeIn {
        from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }
`;
document.head.appendChild(style);

function resetSantaState() {
    santaClicked = false;
    localStorage.removeItem('santaClicked');
    initializeSantaInteraction();
}
