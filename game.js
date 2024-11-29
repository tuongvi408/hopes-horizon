let trust, wealth, happiness, role, turns, maxTurns;
let scenarios = [];  // To store scenarios loaded from the JSON file

// Load the JSON files based on the role
function loadScenarios() {
    const fileName = `scenarios-${role.toLowerCase()}.json`;

    fetch(fileName)
        .then(response => response.json())
        .then(data => {
            scenarios = data[role.toLowerCase()];
            nextTurn();  // Start the game after loading scenarios
        })
        .catch(error => console.error('Error loading scenarios:', error));
}

// Start the game by setting up the role and initializing metrics
function startGame(selectedRole) {
    role = selectedRole;
    trust = 50;  // Default starting values
    wealth = 100000;  // Default starting values
    happiness = 70;  // Default starting values
    turns = 0;
    maxTurns = 8;

    document.getElementById('role-selection').style.display = 'none';
    document.getElementById('gameplay').style.display = 'block';

    updateMetrics();
    loadScenarios();  // Load the relevant scenarios for the selected role
}

// Update the displayed metrics (Trust, Wealth, Happiness)
function updateMetrics() {
    document.getElementById('trust').textContent = trust;
    document.getElementById('wealth').textContent = wealth;
    document.getElementById('happiness').textContent = happiness;
}

// Start the next turn by selecting a scenario and showing the options
function nextTurn() {
    if (turns >= maxTurns) {
        endGame();
        return;
    }

    turns++;
    let scenario = getRandomScenario();
    document.getElementById('scenario').textContent = scenario.text;

    // Update decision buttons with options and their effects
    for (let i = 0; i < 3; i++) {
        const button = document.getElementById(`decision${i+1}`);
        const option = scenario.options[i];

        button.textContent = option.text;
        button.onclick = () => makeDecision(option);
        button.setAttribute('data-effects', JSON.stringify(option.effects)); // Store effects as data attribute
    }
}

// Get a random scenario based on the current role
function getRandomScenario() {
    return scenarios[Math.floor(Math.random() * scenarios.length)];
}

// Handle decision making, update metrics, and proceed to the next turn
function makeDecision(option) {
    const effects = option.effects;

    wealth += effects.wealth;
    happiness += effects.happiness;
    trust += effects.trust;

    updateMetrics();
    nextTurn();
}

// End the game and display the result
function endGame() {
    let message = "";

    if (role === "President" && trust > 70 && happiness > 60) {
        message = "You were re-elected successfully!";
    } else if (role === "Governor" && trust > 50 && happiness > 60) {
        message = "You gained enough support to run for President!";
    } else if (role === "Businessman" && wealth > 500000 && happiness > 60) {
        message = "You achieved your personal wealth goal while maintaining social responsibility!";
    } else {
        message = "You failed to meet your objectives. Try again!";
    }

    document.getElementById('gameplay').style.display = 'none';
    document.getElementById('end-screen').style.display = 'block';
    document.getElementById('end-message').textContent = message;
}

// Reset the game for a new playthrough
function resetGame() {
    location.reload();
}
