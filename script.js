// Проверка, есть ли сохранённый счёт в localStorage
let score = localStorage.getItem('clickScore') ? parseFloat(localStorage.getItem('clickScore')) : 0;

// Обновляем отображение счётчика на странице
document.getElementById('scoreboard').innerText = 'Coins: ' + score.toFixed(5);

// Обработчик события для изображения
document.getElementById('clickerImage').addEventListener('click', function() {
    score += 0.00001;
    document.getElementById('scoreboard').innerText = 'Coins: ' + score.toFixed(5); // отображаем с точностью до 5 знаков

    // Сохраняем новое значение счётчика в localStorage
    localStorage.setItem('clickScore', score);
});
let score = 0;
let clickThreshold = 400; // Лимит кликов для каждой картинки
let taskImages = document.querySelectorAll('.taskImage');
let currentImageIndex = 0;

document.getElementById('clickerImage').addEventListener('click', function() {
    score += 0.00001; // Добавление монет за клик
    document.getElementById('score').innerText = score.toFixed(5); // Обновление счётчика

    // Проверка на количество кликов
    if (Math.floor(score * 100000) % clickThreshold === 0) { // Условие для каждой картинки
        if (currentImageIndex < taskImages.length) {
            taskImages[currentImageIndex].style.display = 'none'; // Скрыть текущее изображение
            currentImageIndex++; // Перейти к следующему изображению
        }
    }
});
