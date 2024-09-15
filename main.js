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
    }

    // Toggle between login and sign up
    toSignUp.addEventListener('click', toggleSlide);
    toLogin.addEventListener('click', toggleSlide);

    // Handle Signup Form Submission
    signupForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission behavior
        successMessage.textContent = 'Your account has been created successfully!';
        successModal.show(); // Show the modal

        // Optionally, redirect after showing the modal
        setTimeout(function () {
            window.location.href = 'index.html'; // Redirect after 2 seconds
        }, 2000);
    });

    // Handle Login Form Submission
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission behavior
        successMessage.textContent = 'You have logged in successfully!';
        successModal.show(); // Show the modal

        // Optionally, redirect after showing the modal
        setTimeout(function () {
            window.location.href = 'dashboard.html'; // Redirect after 2 seconds
        }, 2000);
    });

    // Ensure modal is hidden on page load
    // This handles cases where the modal might be shown by mistake
    if (successModalElement.classList.contains('show')) {
        successModal.hide();
    }
});
