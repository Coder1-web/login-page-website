let typingTimer;
const typingDelay = 500; // Delay in milliseconds after typing stops

function validatePassword() {
    var password = document.getElementById('password').value;
    if (password === 'darkstuff3022') {
        document.getElementById('character').classList.add('eyes-closed');
        setTimeout(() => {
            window.location.href = 'nextpage.html'; // Redirect to next page on correct password
        }, 1000); // Allow time for animation
    } else {
        alert('Incorrect password. Please try again.');
    }
    return false; // Prevent form from submitting
}