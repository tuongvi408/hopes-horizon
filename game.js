let trust, wealth, happiness, role, turns, maxTurns;
<<<<<<< Updated upstream
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
=======

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    loadScenarios();  // Load the relevant scenarios for the selected role
}

// Update the displayed metrics (Trust, Wealth, Happiness)
=======
    nextTurn();
}

>>>>>>> Stashed changes
function updateMetrics() {
    document.getElementById('trust').textContent = trust;
    document.getElementById('wealth').textContent = wealth;
    document.getElementById('happiness').textContent = happiness;
}

<<<<<<< Updated upstream
// Start the next turn by selecting a scenario and showing the options
=======
>>>>>>> Stashed changes
function nextTurn() {
    if (turns >= maxTurns) {
        endGame();
        return;
    }

    turns++;
<<<<<<< Updated upstream
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
=======
    let scenario = generateScenario();
    document.getElementById('scenario').textContent = scenario.text;
    // Update decision buttons
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`decision${i}`).textContent = scenario.options[i-1];
    }
}

function generateScenario() {
    const scenarios = [
        {
            text: "A national crisis has occurred. What will you do?",
            options: [
                "Increase military spending (Wealth +5%, Happiness -5%, Trust -10%)",
                "Cut taxes to boost the economy (Wealth +10%, Happiness -5%, Trust +5%)",
                "Implement social welfare programs (Wealth -10%, Happiness +10%, Trust +10%)"
            ]
        },
        {
            text: "A new business opportunity arises. What is your decision?",
            options: [
                "Invest in the business for growth (Wealth +20%, Happiness -5%, Trust +5%)",
                "Take a conservative approach (Wealth +5%, Happiness +5%, Trust +5%)",
                "Ignore the opportunity and focus on social issues (Wealth -5%, Happiness +10%, Trust +10%)"
            ]
        },
        {
            text: "How will you address the education system?",
            options: [
                "Increase funding for education (Wealth -15%, Happiness +15%, Trust +10%)",
                "Cut funding to reduce the budget deficit (Wealth +10%, Happiness -5%, Trust -5%)",
                "Privatize education (Wealth +20%, Happiness -10%, Trust -15%)"
            ]
        }
    ];

    return scenarios[Math.floor(Math.random() * scenarios.length)];
}

function makeDecision(optionIndex) {
    let scenario = generateScenario();
    switch (optionIndex) {
        case 1:
            applyScenarioImpact(scenario.options[0]);
            break;
        case 2:
            applyScenarioImpact(scenario.options[1]);
            break;
        case 3:
            applyScenarioImpact(scenario.options[2]);
            break;
    }
>>>>>>> Stashed changes

    updateMetrics();
    nextTurn();
}

<<<<<<< Updated upstream
// End the game and display the result
function endGame() {
    let message = "";

=======
function applyScenarioImpact(option) {
    if (option.includes("Wealth +")) {
        wealth += parseInt(option.split('Wealth +')[1].split('%')[0]);
    }
    if (option.includes("Happiness +")) {
        happiness += parseInt(option.split('Happiness +')[1].split('%')[0]);
    }
    if (option.includes("Trust +")) {
        trust += parseInt(option.split('Trust +')[1].split('%')[0]);
    }
    if (option.includes("Wealth -")) {
        wealth -= parseInt(option.split('Wealth -')[1].split('%')[0]);
    }
    if (option.includes("Happiness -")) {
        happiness -= parseInt(option.split('Happiness -')[1].split('%')[0]);
    }
    if (option.includes("Trust -")) {
        trust -= parseInt(option.split('Trust -')[1].split('%')[0]);
    }
}

function endGame() {
    let message = "";
    
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
// Reset the game for a new playthrough
=======
>>>>>>> Stashed changes
function resetGame() {
    location.reload();
}
