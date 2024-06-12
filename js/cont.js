document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var emailInput = document.getElementById('newsletterEmail');
    var email = emailInput.value.trim();
    var messageElement = document.getElementById('newsletterMessage');

    if (!validateEmail(email)) {
        messageElement.textContent = 'Пожалуйста, введите действительный email.';
        messageElement.style.color = 'red';
        return;
    }

    var existingEmails = JSON.parse(localStorage.getItem('subscribedEmails')) || [];
    if (existingEmails.includes(email)) {
        messageElement.textContent = 'Этот email уже подписан на новости.';
        messageElement.style.color = 'red';
        return;
    }

    existingEmails.push(email);
    localStorage.setItem('subscribedEmails', JSON.stringify(existingEmails));

    messageElement.textContent = 'Спасибо за подписку!';
    messageElement.style.color = 'green';
    emailInput.value = '';
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}