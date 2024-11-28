// script.js

let game = {
    month: 1,
    metrics: {
        trust: 50,
        economy: 50,
        happiness: 50,
        debt: 10
    },
    role: '',
    goal: null,
    maxMonths: 46, // 46 months, corresponding to 4 years
};

function startGame(role) {
    game.role = role;
    game.metrics = {
        trust: 50,
        economy: 50,
        happiness: 50,
        debt: 10
    };
    initializeGoal();
    document.getElementById('intro').style.display = 'none';
    document.getElementById('gameplay').style.display = 'block';
    updateUI();
}

function initializeGoal() {
    if (game.role === 'president') {
        game.goal = {
            description: "Get re-elected for the next term and create a lasting international reputation.",
            reElectionLikelihood: 50, // 50% chance to be re-elected at the start
            corruptionLevel: 0, // 0 means no corruption, higher values mean more corrupt
        };
    } else if (game.role === 'governor') {
        game.goal = {
            description: "Serve as governor and prepare to run for president.",
            communitySupport: 50, // Track how much community support they have
        };
    } else if (game.role === 'villager') {
        game.goal = {
            description: "Decide whether to focus on personal wealth or the welfare of the community.",
            personalWealth: 1000, // Start with a significant amount of wealth
            socialResponsibility: 50, // Track the balance between personal wealth and community welfare
        };
    }
}

function progressMonth() {
    game.month++;
    applyMonthlyChanges();
    triggerEvents();
    checkGoalProgress();
    if (game.month > game.maxMonths) {
        endGame();
    } else {
        presentScenario(); // Present decision-making for the player
    }
    updateUI();
}

function applyMonthlyChanges() {
    // Example of monthly decay or changes
    game.metrics.happiness = Math.max(0, game.metrics.happiness - 2); // People are generally unhappy as time passes
    game.metrics.debt = Math.min(100, game.metrics.debt + 2); // Debt increases slowly

    if (game.role === 'president') {
        // President's decisions might influence trust and economy
        game.metrics.trust = Math.max(0, game.metrics.trust - 1);
    }

    if (game.role === 'governor') {
        // Governor's actions might influence local happiness and economy
        game.metrics.happiness = Math.max(0, game.metrics.happiness - 1);
    }
}

function checkGoalProgress() {
    if (game.role === 'president') {
        if (game.metrics.trust > 70 && game.metrics.economy > 60) {
            game.goal.completed = true; // Achieved a successful presidency
        }
    } else if (game.role === 'governor') {
        if (game.goal.communitySupport > 70) {
            game.goal.completed = true; // Governor is popular and ready for the next term
        }
    } else if (game.role === 'villager') {
        if (game.goal.personalWealth > 2000 && game.goal.socialResponsibility > 60) {
            game.goal.completed = true; // Villager has secured wealth and is responsible
        }
    }
}

function triggerEvents() {
    // Placeholder for random events (e.g., economic downturns, protests, etc.)
}

function presentScenario() {
    const scenarioText = document.getElementById('scenario-text');
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = ''; // Clear previous options

    // Role-based scenarios
    let scenario;
    if (game.role === 'president') {
        scenario = {
            text: "The economy is facing a downturn. What do you do?",
            options: [
                { text: "Cut taxes to stimulate growth (-$100, trust +10)", effects: { economy: -10, trust: 10 } },
                { text: "Invest in social welfare programs (-$50, happiness +10)", effects: { debt: 20, happiness: 10 } },
                { text: "Increase military spending (-$100, economy +5)", effects: { economy: 5, debt: 20 } }
            ]
        };
    } else if (game.role === 'governor') {
        scenario = {
            text: "The community is protesting high taxes. How do you respond?",
            options: [
                { text: "Suggest a tax cut to the President (increases trust)", effects: { trust: 10 } },
                { text: "Do nothing and let the protests escalate (happiness -10)", effects: { happiness: -10 } }
            ]
        };
    } else if (game.role === 'villager') {
        scenario = {
            text: "The government is planning to reduce welfare programs. What do you do?",
            options: [
                { text: "Support the cuts to save personal wealth (+$50, happiness -10)", effects: { personalWealth: 50, happiness: -10 } },
                { text: "Protest to save the welfare programs (happiness +10, personal wealth -$50)", effects: { happiness: 10, personalWealth: -50 } }
            ]
        };
    }

    // Display scenario
    scenarioText.innerText = scenario.text;

    // Create buttons for each choice
    scenario.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option.text;
        button.onclick = () => {
            applyEventEffects(option.effects);
            updateUI();
            scenarioText.innerText = '';
            optionsDiv.innerHTML = ''; // Clear options after choice
        };
        optionsDiv.appendChild(button);
    });
}

function applyEventEffects(effects) {
    for (const [key, value] of Object.entries(effects)) {
        game.metrics[key] = game.metrics[key] + value;
    }
}

function updateUI() {
    document.getElementById('month').innerText = `Month: ${game.month}`;
    document.getElementById('trust').innerText = game.metrics.trust;
    document.getElementById('economy').innerText = game.metrics.economy;
    document.getElementById('happiness').innerText = game.metrics.happiness;
    document.getElementById('debt').innerText = game.metrics.debt;

    const roleMetrics = document.getElementById('role-specific-metrics');
    if (game.role === 'president') {
        roleMetrics.innerText = `Re-election Likelihood: ${game.goal.reElectionLikelihood}% | Corruption Level: ${game.goal.corruptionLevel}`;
    } else if (game.role === 'governor') {
        roleMetrics.innerText = `Community Support: ${game.goal.communitySupport}%`;
    } else if (game.role === 'villager') {
        roleMetrics.innerText = `Personal Wealth: $${game.goal.personalWealth} | Social Responsibility: ${game.goal.socialResponsibility}%`;
    }
}

function endGame() {
    if (game.goal.completed) {
        alert("You achieved your goal! Well done!");
    } else {
        alert("Game over! You did not meet your goal.");
    }
    resetGame();
}

function resetGame() {
    game.month = 1;
    game.metrics = { trust: 50, economy: 50, happiness: 50, debt: 10 };
    game.role = '';
    document.getElementById('intro').style.display = 'block';
    document.getElementById('gameplay').style.display = 'none';
}
