// Определение переменной score
let score = localStorage.getItem('clickScore') ? parseFloat(localStorage.getItem('clickScore')) : 0;

let clickerImage = document.getElementById('clickerImage');
clickerImage.src = 'img/button.png'; // Убедись, что путь указан правильно

document.getElementById('clickerImage').addEventListener('click', function() {
    score += 0.00001; // Добавление монет за клик
    document.getElementById('scoreboard').innerText = 'Coins: ' + score.toFixed(5); // отображаем с точностью до 5 знаков

    // Сохраняем новое значение счётчика в localStorage
    localStorage.setItem('clickScore', score);

    // Логи для отладки
    console.log('Score:', score);
    console.log('Current Image Index:', currentImageIndex);
    console.log('Threshold for next image:', clickThreshold * (currentImageIndex + 1));
    
    // Проверка на количество кликов
    if (Math.floor(score * 100000) >= clickThreshold * (currentImageIndex + 1)) {
        console.log('Image should hide now');
        if (currentImageIndex < taskImages.length) {
            taskImages[currentImageIndex].style.display = 'none'; // Скрыть текущее изображение
            currentImageIndex++; // Перейти к следующему изображению
        }
    }
});
