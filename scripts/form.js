document.getElementById('confirm_password').oninput = function() {
    const password = document.getElementById('password');
    const confirm = this;
    if (password.value !== confirm.value) {
        confirm.setCustomValidity('Passwords do not match');
    } else {
        confirm.setCustomValidity('');
    }
};
