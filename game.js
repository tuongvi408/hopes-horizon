// Declare initial game variables
let currentRole = '';
let currentScenarioIndex = 0;
let wealth = 0;
let happiness = 50;
let trust = 50;
let scenarios = [];
let turnCount = 0;
let currentMonth = 0;  // Start at Month 0

// Add event listeners for role selection buttons
document.getElementById('president-btn').addEventListener('click', () => startGame('president'));
document.getElementById('governor-btn').addEventListener('click', () => startGame('governor'));
document.getElementById('businessman-btn').addEventListener('click', () => startGame('businessman'));

// Next month button functionality
document.getElementById('next-month-btn').addEventListener('click', () => {
    if (turnCount < 8 && scenarios.length > 0) {  
        turnCount++;  
        currentMonth += 6;  // Increase month by 6 months

        // Pick a random scenario from the available pool
        const randomIndex = Math.floor(Math.random() * scenarios.length);
        const scenario = scenarios.splice(randomIndex, 1)[0];  // Remove the chosen scenario

        // Update scenario and options
        document.getElementById('scenario').textContent = scenario.text;
        scenario.options.forEach((option, index) => {
            const button = document.querySelectorAll('.option-btn')[index];
            button.textContent = option.text;
            button.onclick = () => handleChoice(option.effects);
        });

        // Update the current month display
        document.getElementById('current-month').textContent = currentMonth;

        // Check if the game should end after 8 turns
        if (turnCount >= 8) {
            endGame('Game Over! You\'ve reached the maximum number of turns (8).');
        }
    } else {
        endGame('Game Over! No more scenarios available.');
    }
});

// Start the game by loading the appropriate scenario file
function startGame(role) {
    currentRole = role;
    document.getElementById('role-selection').style.display = 'none';
    document.getElementById('gameplay').style.display = 'block';
    document.getElementById('role-name').textContent = capitalizeFirstLetter(role);  
    loadScenarios(role);  // Load the corresponding scenarios based on selected role
}

// Load scenarios dynamically based on the role selected
function loadScenarios(role) {
    fetch(`scenarios-${role}.json`)  // Load the appropriate JSON file
        .then(response => response.json())
        .then(data => {
            scenarios = data[role];  // Load the scenarios for the selected role
            shuffleScenarios(scenarios);  // Shuffle the scenarios for randomness
            turnCount = 0;
            currentMonth = 0;
            updateMetrics();
            showScenario();  // Show the first scenario
        })
        .catch(error => console.error('Error loading scenario file:', error));
}

// Show the next scenario by randomly selecting from the pool
function showScenario() {
    if (scenarios.length > 0) {
        const randomIndex = Math.floor(Math.random() * scenarios.length);
        const scenario = scenarios.splice(randomIndex, 1)[0];

        // Display scenario text
        document.getElementById('scenario').textContent = scenario.text;

        // Set option buttons text and behavior
        scenario.options.forEach((option, index) => {
            const button = document.querySelectorAll('.option-btn')[index];
            button.textContent = option.text;
            button.onclick = () => handleChoice(option.effects);
        });
    }
}

// Handle the effects of the player's choice
function handleChoice(effects) {
    wealth += effects.wealth || 0;
    happiness += effects.happiness || 0;
    trust += effects.trust || 0;
    updateMetrics();
    showScenario();  // Display the next scenario after the choice
}

// Update the metrics (wealth, happiness, trust) on the UI
function updateMetrics() {
    document.getElementById('wealth').textContent = wealth;
    document.getElementById('happiness').textContent = happiness;
    document.getElementById('trust').textContent = trust;
}

// End the game and display the game over message
function endGame(message) {
    document.getElementById('game-status').textContent = message;
    document.getElementById('gameplay').style.display = 'none';
    document.getElementById('role-selection').style.display = 'block';
}

// Shuffle the scenarios array for randomness
function shuffleScenarios(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];  // Swap elements
    }
}

// Capitalize the first letter of the string (role name)
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
