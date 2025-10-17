// Loading screen
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector('.loading-screen').classList.add('fade-out');
    }, 1500);
});

// Heart cursor trail
document.addEventListener('mousemove', (e) => {
    createHeartCursor(e.clientX, e.clientY);
});

document.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    createHeartCursor(touch.clientX, touch.clientY);
});

function createHeartCursor(x, y) {
    const heart = document.createElement('div');
    heart.innerHTML = '💗';
    heart.className = 'heart-cursor';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), 1000);
}

// Bow sparkle effect
const bowDecoration = document.getElementById('bowDecoration');
bowDecoration.addEventListener('mouseover', createSparkles);

function createSparkles() {
    for (let i = 0; i < 5; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'bow-sparkle';
        const x = Math.random() * 40 - 20;
        const y = Math.random() * 40 - 20;
        sparkle.style.left = `calc(50% + ${x}px)`;
        sparkle.style.top = `calc(50% + ${y}px)`;
        sparkle.style.animation = `sparkle ${0.5 + Math.random() * 0.5}s forwards`;
        bowDecoration.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1000);
    }
}

// Music player
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');
let isMusicPlaying = false;

musicToggle.addEventListener('click', () => {
    if (isMusicPlaying) {
        bgMusic.pause();
        musicToggle.classList.remove('playing');
    } else {
        bgMusic.play();
        musicToggle.classList.add('playing');
    }
    isMusicPlaying = !isMusicPlaying;
});

// Add glow effect to special words
document.querySelectorAll('.message-text').forEach(element => {
    const specialWords = ['love', 'you', 'hi', '[her name]'];
    element.innerHTML = element.innerHTML.replace(
        new RegExp(`(${specialWords.join('|')})`, 'gi'),
        '<span class="glow-text">$1</span>'
    );
});