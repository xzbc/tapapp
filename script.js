document.getElementById('clickerImage').addEventListener('click', function() {
    score += 0.00001; // Добавление монет за клик
    document.getElementById('scoreboard').innerText = 'Coins: ' + score.toFixed(5); // отображаем с точностью до 5 знаков

    // Сохраняем новое значение счётчика в localStorage
    localStorage.setItem('clickScore', score);

    // Проверка на количество кликов
    console.log('Score:', score); // Выводим текущее значение счёта
    console.log('Current Image Index:', currentImageIndex); // Выводим индекс текущего изображения
    
    if (Math.floor(score * 100000) % clickThreshold === 0) { // Условие для каждой картинки
        if (currentImageIndex < taskImages.length) {
            taskImages[currentImageIndex].style.display = 'none'; // Скрыть текущее изображение
            currentImageIndex++; // Перейти к следующему изображению
        }
    }
});
