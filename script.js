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

document.addEventListener('DOMContentLoaded', function () {
    // Получаем элемент монетки
    var coin = document.getElementById('coin');

    // Добавляем обработчик события клика
    coin.addEventListener('click', function () {
        // Добавляем класс анимации
        coin.classList.add('animate');

        // Задержка перед удалением класса анимации, чтобы можно было снова кликнуть
        setTimeout(function () {
            coin.classList.remove('animate');
        }, 500); // 0.5 секунды - время анимации
    });
});
