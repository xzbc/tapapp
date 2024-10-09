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
