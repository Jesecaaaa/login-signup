document.addEventListener("DOMContentLoaded", function () {
    const toSignUp = document.getElementById('toSignUp');
    const toLogin = document.getElementById('toLogin');
    const container = document.querySelector('.section-container');
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    const successModalElement = document.getElementById('successModal');
    const successMessage = document.getElementById('successMessage');
    const successModal = new bootstrap.Modal(successModalElement, { keyboard: false });

    // Toggle Slide Function
    function toggleSlide() {
        container.classList.toggle('slide-active');
        
        setTimeout(() => {
            ScrollReveal().reveal('.ht2', { delay: 300 });
        }, 500);
    }

    toSignUp.addEventListener('click', toggleSlide);
    toLogin.addEventListener('click', toggleSlide);

    // Handle Signup Form Submission with Confirm Password and Regex Validation
    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Regex for password validation: At least one uppercase letter, one lowercase letter, one digit, one special character, and minimum 8 characters.
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!passwordPattern.test(password)) {
            alert('Password must contain at least 8 characters, including an uppercase letter, a lowercase letter, a number, and a special character.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
            return;
        }

        successMessage.textContent = 'Your account has been created successfully!';
        successModal.show();

        setTimeout(function () {
            window.location.href = 'index.html';
        }, 2000);
    });

    // Handle Login Form Submission
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        successMessage.textContent = 'You have logged in successfully!';
        successModal.show();

        setTimeout(function () {
            window.location.href = 'dashboard.html';
        }, 2000);
    });

    if (successModalElement.classList.contains('show')) {
        successModal.hide();
    }

    // ScrollReveal setup for animations
    ScrollReveal().reveal('.ht1', { delay: 200 });
    ScrollReveal().reveal('.ht2', { delay: 300 });

    const sr = ScrollReveal({
        origin: 'left',
        distance: '80px',
        duration: 2000,
        reset: true
    });
    sr.reveal('.section-2', { delay: 100 });
    sr.reveal('.bottomfoot', { delay: 200 });

    const srRight = ScrollReveal({
        origin: 'right',
        distance: '120px',
        duration: 2000,
        reset: true
    });
    srRight.reveal('.ht1', { delay: 200 });

    const srRightnear = ScrollReveal({
        origin: 'right',
        distance: '80px',
        duration: 2000,
        reset: true
    });
    srRightnear.reveal('#loginForm', { delay: 300 });
});
