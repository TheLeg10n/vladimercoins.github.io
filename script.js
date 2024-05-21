let balance = 0;
let clicksLeft = 5000;

const coin = document.getElementById('coin');
const balanceDisplay = document.getElementById('balance');
const clicksDisplay = document.getElementById('clicks');
const progressBar = document.getElementById('progressBar');

coin.addEventListener('click', () => {
    if (clicksLeft > 0) {
        balance++;
        clicksLeft--;
        balanceDisplay.textContent = `${balance}`;
        updateProgressBar();
        animateCoin();
    } else {
        alert('Вы использовали все доступные клики!');
    }
});

function updateProgressBar() {
    const progress = (5000 - clicksLeft) / 5000 * 100;
    progressBar.style.width = progress + '%';
}

function animateCoin() {
    coin.classList.add('animate');
    setTimeout(() => {
        coin.classList.remove('animate');
    }, 500);
}
