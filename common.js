function openAboutUs() {
    document.getElementById('home').className = 'invisible';
    document.getElementById('about').className = '';
}

function startPlaying() {
    document.getElementById('home').className = 'invisible';
    document.getElementById('game').className = '';
    document.getElementById('about').className = 'invisible';
}

function backToHome() {
    document.getElementById('home').className = '';
    document.getElementById('thanks').className = 'invisible';
    document.getElementById('about').className = 'invisible';
}

function confirmEnding() {
    document.getElementById('ending').className = 'invisible';
    document.getElementById('thanks').className = '';
}