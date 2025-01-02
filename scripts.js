window.onload = function() {
    const greeting = document.querySelector('h1');
    const hour = new Date().getHours();
    if (hour < 12) {
        greeting.textContent = 'Bom dia, meu bem!';
    } else if (hour < 18) {
        greeting.textContent = 'Boa tarde, meu bem!';
    } else {
        greeting.textContent = 'Boa noite, meu bem!';
    }
};

window.onload = function() {
    const greeting = document.getElementById('greeting');
    const hour = new Date().getHours();
    let message = '';

    if (hour < 12) {
        message = 'Bom dia, meu bem!';
    } else if (hour < 18) {
        message = 'Boa tarde, meu bem!';
    } else {
        message = 'Boa noite, meu bem!';
    }

    let i = 0;
    function typeWriter() {
        if (i < message.length) {
            greeting.innerHTML += message.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();
};
