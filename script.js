let score = 0;

document.getElementById('clickerButton').addEventListener('click', function() {
    score += 1; // или можно сделать инкремент на 0.00001 для монеток
    document.getElementById('scoreboard').innerText = 'Clicks: ' + score;
});
