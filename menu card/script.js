document.getElementById('toggle-ingredients').addEventListener('click', function() {
    const ingredients = document.getElementById('ingredients');
    ingredients.style.display = ingredients.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('toggle-steps').addEventListener('click', function() {
    const steps = document.getElementById('steps');
    steps.style.display = steps.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('start-cooking').addEventListener('click', function() {
    const steps = document.querySelectorAll('.step');
    let currentStep = 0;

    const highlightStep = () => {
        if (currentStep < steps.length) {
            steps[currentStep].style.color = '#d9534f'; // Highlight color
            document.getElementById('progress-bar').style.width = `${(currentStep + 1) / steps.length * 100}%`;
            currentStep++;
        }
    };

    highlightStep(); // Highlight the first step

    // Next step button
    const nextStepButton = document.createElement('button');
    nextStepButton.innerText = "Next";
    nextStepButton.style.marginTop = "10px";
    document.body.appendChild(nextStepButton);

    nextStepButton.addEventListener('click', highlightStep);

    // Timer setup
    let timeLeft = 30 * 60; // 30 minutes
    const timerDisplay = document.getElementById('time-left');
    const interval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(interval);
            alert("Time's up!");
            return;
        }
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }, 1000);
});
