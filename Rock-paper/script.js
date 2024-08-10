const choices = ['rock', 'paper', 'scissors'];

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', function() {
        const userChoice = this.id;
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        let result = '';

        if (userChoice === computerChoice) {
            result = "It's a tie!";
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            result = 'You win!';
        } else {
            result = 'You lose!';
        }

        document.getElementById('result').innerHTML = `
            <p>You chose: ${userChoice}</p>
            <p>Computer chose: ${computerChoice}</p>
            <p>${result}</p>
        `;
    });
});
