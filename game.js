let currentRole = '';
let currentScenarioIndex = 0;
let wealth = 0;
let happiness = 50;  // Initial happiness set to 50
let trust = 50;  // Initial trust set to 50
let scenarios = [];
let turnCount = 0;  // Track the number of turns
let currentMonth = 0;  // Start at Month 0

// Add event listeners for each role selection
document.getElementById('president-btn').addEventListener('click', () => startGame('president'));
document.getElementById('governor-btn').addEventListener('click', () => startGame('governor'));
document.getElementById('businessman-btn').addEventListener('click', () => startGame('businessman'));

document.getElementById('next-month-btn').addEventListener('click', () => {
    if (turnCount < 8 && scenarios.length > 0) {  // If there are turns remaining
        turnCount++;  // Increment the turn count
        currentMonth += 6;  // Increase the month by 6 for each turn

        // Pick a random scenario from the available scenarios
        const randomIndex = Math.floor(Math.random() * scenarios.length);
        const scenario = scenarios.splice(randomIndex, 1)[0];  // Remove the chosen scenario from the pool

        // Update the scenario
        document.getElementById('scenario').textContent = scenario.text;

        // Set option buttons text
        scenario.options.forEach((option, index) => {
            const button = document.querySelectorAll('.option-btn')[index];
            button.textContent = option.text;
            button.onclick = () => handleChoice(option.effects);  // Attach event handler for each option
        });

        // Update the current month display (no "Month" label, just the number)
        document.getElementById('current-month').textContent = currentMonth;

        // Check if the game should end
        if (turnCount >= 8) {
            endGame('Game Over! You\'ve reached the maximum number of turns (8).');
        }
    }
});

function startGame(role) {
    currentRole = role;
    document.getElementById('role-selection').style.display = 'none';  // Hide the role selection
    document.getElementById('gameplay').style.display = 'block';  // Show the gameplay screen
    document.getElementById('role-name').textContent = capitalizeFirstLetter(role);  // Display role name
    loadScenarios(role);  // Load corresponding scenario file
}

function loadScenarios(role) {
    fetch(`scenarios-${role}.json`)  // Fetch the correct role's scenario file
        .then(response => response.json())
        .then(data => {
            scenarios = data[role];  // Load the scenarios for the chosen role
            shuffleScenarios(scenarios);  // Shuffle the scenarios randomly
            currentScenarioIndex = 0;  // Start from the first scenario
            wealth = 0;  // Reset wealth
            happiness = 50;  // Reset happiness
            trust = 50;  // Reset trust
            turnCount = 0;  // Reset turn count
            currentMonth = 0;  // Reset to Month 0
            updateMetrics();  // Update the metrics display
            showScenario();  // Show the first scenario
        })
        .catch(error => console.error('Error loading scenario file:', error));  // Log error if the file can't be loaded
}

function showScenario() {
    if (scenarios.length > 0) {
        // Pick a random scenario from the available scenarios
        const randomIndex = Math.floor(Math.random() * scenarios.length);
        const scenario = scenarios.splice(randomIndex, 1)[0];  // Remove the chosen scenario from the pool

        document.getElementById('scenario').textContent = scenario.text;

        // Set option buttons text
        scenario.options.forEach((option, index) => {
            const button = document.querySelectorAll('.option-btn')[index];
            button.textContent = option.text;
            button.onclick = () => handleChoice(option.effects);  // Attach event handler for each option
        });
    } else {
        endGame('Game Over! No more scenarios available.');
    }
}

function handleChoice(effects) {
    wealth += effects.wealth || 0;
    happiness += effects.happiness || 0;
    trust += effects.trust || 0;
    updateMetrics();
    showScenario();  // Show the next scenario after the player makes a choice
}

function updateMetrics() {
    document.getElementById('wealth').textContent = wealth;  // Display wealth without the "$" symbol
    document.getElementById('happiness').textContent = happiness;
    document.getElementById('trust').textContent = trust;
}

function endGame(message) {
    document.getElementById('game-status').textContent = message;  // Show the final message
    document.getElementById('gameplay').style.display = 'none';  // Hide gameplay screen
    document.getElementById('role-selection').style.display = 'block';  // Show the role selection again
}

// Helper function to shuffle the scenarios randomly
function shuffleScenarios(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];  // Swap elements
    }
}

// Helper function to capitalize the first letter of the role name
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
