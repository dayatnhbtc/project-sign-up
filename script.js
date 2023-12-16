const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const button = document.querySelector('button');
const notMatch = document.getElementsByClassName('not-match');

confirmPassword.addEventListener('input', (e) => {
    if (password.value === confirmPassword.value) {
        notMatch[0].innerText = '';
    } else {
        notMatch[0].innerText = 'password do not match';
    }
});
