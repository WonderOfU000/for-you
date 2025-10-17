import confetti from 'canvas-confetti';

// Wait for DOM to be loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get all the elements we need
    const askButton = document.getElementById('askButton');
    const askModal = document.getElementById('askModal');
    const finalModal = document.getElementById('finalModal');
    const yesButton = document.getElementById('yesButton');
    const ofCourseButton = document.getElementById('ofCourseButton');
    const closeButtons = document.querySelectorAll('.close-modal');

    // Heart rain effect
    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '💗';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '-20px';
        heart.style.fontSize = Math.random() * 10 + 20 + 'px';
        heart.style.opacity = '0.8';
        heart.style.transform = `rotate(${Math.random() * 60 - 30}deg)`;
        heart.style.transition = 'all linear';
        heart.style.transitionDuration = Math.random() * 2 + 3 + 's';
        
        document.body.appendChild(heart);
        
        requestAnimationFrame(() => {
            heart.style.top = '105vh';
            heart.style.opacity = '0';
        });
        
        setTimeout(() => heart.remove(), 5000);
    }

    // Create hearts periodically
    let heartInterval = setInterval(createHeart, 400);

    // Show ask modal when click me button is pressed
    askButton.addEventListener('click', () => {
        askModal.classList.remove('hidden');
    });

    // Handle yes and of course buttons
    function handlePositiveResponse() {
        askModal.classList.add('hidden');
        finalModal.classList.remove('hidden');
        
        // Trigger celebratory confetti
        const end = Date.now() + 3000;
        const colors = ['#ff69b4', '#ffb6c1', '#ffc0cb'];

        (function frame() {
            confetti({
                particleCount: 3,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: colors
            });
            confetti({
                particleCount: 3,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: colors
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }

    yesButton.addEventListener('click', handlePositiveResponse);
    ofCourseButton.addEventListener('click', handlePositiveResponse);

    // Handle close buttons
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            askModal.classList.add('hidden');
            finalModal.classList.add('hidden');
        });
    });
});

// Modal handling
const modal = document.getElementById('askModal');
const finalModal = document.getElementById('finalModal');
const askButton = document.getElementById('askButton');

askButton?.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

// Handle positive responses
['yesButton', 'ofCourseButton'].forEach(id => {
    document.getElementById(id)?.addEventListener('click', () => {
        modal.classList.add('hidden');
        const complimentModal = document.getElementById('complimentModal');
        complimentModal.classList.remove('hidden');
        
        // Show final modal after 2 seconds
        setTimeout(() => {
            complimentModal.classList.add('hidden');
            finalModal.classList.remove('hidden');
            
            // Trigger enhanced confetti
            const duration = 4000;
            const colors = ['#ff69b4', '#ffb6c1', '#ffc0cb'];
            const end = Date.now() + duration;

            (function frame() {
                const timeLeft = end - Date.now();
                const ticks = Math.max(200, 500 * (timeLeft / duration));

                confetti({
                    particleCount: 4,
                    angle: 60,
                    spread: 60,
                    origin: { x: 0 },
                    colors: colors,
                    ticks: ticks,
                    shapes: ['heart'],
                    gravity: 0.8,
                    scalar: 2
                });
                confetti({
                    particleCount: 4,
                    angle: 120,
                    spread: 60,
                    origin: { x: 1 },
                    colors: colors,
                    ticks: ticks,
                    shapes: ['heart'],
                    gravity: 0.8,
                    scalar: 2
                });

                if (timeLeft > 0) {
                    requestAnimationFrame(frame);
                }
            }());
        }, 2000);
    });
});

// Close button handling
document.querySelectorAll('.close-modal').forEach(button => {
    button.addEventListener('click', () => {
        modal.classList.add('hidden');
        finalModal.classList.add('hidden');
    });
});