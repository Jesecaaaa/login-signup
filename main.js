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
        
        // Apply ScrollReveal after the slide animation
        setTimeout(() => {
            ScrollReveal().reveal('.ht2', { delay: 300 });
        }, 500); // Adjust the timing to ensure the slide is complete
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
    if (successModalElement.classList.contains('show')) {
        successModal.hide();
    }

    // ScrollReveal setup for the initial state
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
