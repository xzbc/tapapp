// Определение переменной score
let score = localStorage.getItem('clickScore') ? parseFloat(localStorage.getItem('clickScore')) : 0;

let clickerImage = document.getElementById('clickerImage');
clickerImage.src = 'img/button.png'; // Убедись, что путь указан правильно

let clickThreshold = 0.004; // 400 нажатий в монетах
let taskImages = document.querySelectorAll('.taskImage');
let currentImageIndex = 0;

// Обработчик события для изображения
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
    if (score >= clickThreshold * (currentImageIndex + 1)) {
        console.log('Image should hide now');
        if (currentImageIndex < taskImages.length) {
            taskImages[currentImageIndex].style.display = 'none'; // Скрыть текущее изображение
            currentImageIndex++; // Перейти к следующему изображению
        }
    }
});

// Восстанавливаем индикаторы
function resetIndicators() {
    taskImages.forEach(image => image.style.display = 'block');
    currentImageIndex = 0;
}

// Проверка времени восстановления
function checkResetTime() {
    let lastResetTime = localStorage.getItem('lastResetTime');
    let now = new Date().getTime();

    // Если прошло 12 часов (12 * 60 * 60 * 1000 миллисекунд)
    if (!lastResetTime || (now - lastResetTime >= 12 * 60 * 60 * 1000)) {
        resetIndicators();
        localStorage.setItem('lastResetTime', now);
    }
}

// Проверяем при загрузке страницы
checkResetTime();

let taskIndicator = 0;

document.querySelectorAll('.taskButton').forEach((button, index) => {
    button.addEventListener('click', function() {
        score += 4; // Добавляем 4 монеты за выполнение задания
        document.getElementById('scoreboard').innerText = 'Coins: ' + score.toFixed(5);
        
        taskIndicator++;
        document.getElementById('taskIndicator').innerText = 'Индикатор: ' + taskIndicator;
    });
});
