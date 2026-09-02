// Matrix Background Effect
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const alphabet = katakana + latin + nums;

const fontSize = 16;
let columns = canvas.width / fontSize;

let rainDrops = [];

for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
}

const draw = () => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.97) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
};

setInterval(draw, 30);

// Resize handler
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = canvas.width / fontSize;
    rainDrops = [];
    for (let x = 0; x < columns; x++) {
        rainDrops[x] = 1;
    }
});

// Typewriter Effect
const texts = [
    "Initiating connection to main server...",
    "Bypassing firewall...",
    "Accessing encrypted databases...",
    "Extracting confidential files...",
    "System compromised.",
    "Welcome, Amonimus696."
];

let i = 0;
let textIndex = 0;
const speed = 50; 
const typewriterElement = document.getElementById('typewriter');

function typeWriter() {
    if (textIndex < texts.length) {
        if (i < texts[textIndex].length) {
            typewriterElement.innerHTML += texts[textIndex].charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            typewriterElement.innerHTML += "<br>";
            i = 0;
            textIndex++;
            setTimeout(typeWriter, 500); 
        }
    } else {
        typewriterElement.innerHTML += `<br><br><span class="glitch" data-text="ACCESS GRANTED.">ACCESS GRANTED.</span>`;
    }
}

setTimeout(typeWriter, 1000);
