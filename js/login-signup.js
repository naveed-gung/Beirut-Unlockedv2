document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const navbarButtons = document.querySelectorAll('.nav-btn');
    const bookBtn = document.getElementById('book-btn');
    let isLoggedIn = false;

    const overlay = document.createElement('div');
    overlay.className = 'login-signup-overlay';
    document.body.appendChild(overlay);

    function createLoginForm() {
        let loginSignupContainer = document.getElementById('login-signup-container');
        
        if (!loginSignupContainer) {
            loginSignupContainer = document.createElement('div');
            loginSignupContainer.id = 'login-signup-container';
            loginSignupContainer.className = 'login-signup-container';
            
            loginSignupContainer.innerHTML = `
                <div class="container" id="container">
                    <div class="form-container sign-up-container">
                        <form action="#">
                            <h1>Create Account</h1>
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button>Sign Up</button>
                        </form>
                    </div>
                    <div class="form-container log-in-container">
                        <form action="#">
                            <h1>Login</h1>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button>Log In</button>
                        </form>
                    </div>
                    <div class="overlay-container">
                        <div class="overlay">
                            <div class="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>Please login with your personal info</p>
                                <button class="ghost" id="logIn">Log In</button>
                            </div>
                            <div class="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button class="ghost" id="signUp">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            document.body.appendChild(loginSignupContainer);
            
            const container = document.getElementById('container');
            const signUpButton = document.getElementById('signUp');
            const logInButton = document.getElementById('logIn');
            
            if (signUpButton && container) {
                signUpButton.addEventListener('click', () => {
                    container.classList.add('right-panel-active');
                });
            }

            if (logInButton && container) {
                logInButton.addEventListener('click', () => {
                    container.classList.remove('right-panel-active');
                });
            }

            setupFormHandlers(loginSignupContainer);
        }
        
        return loginSignupContainer;
    }

    function setupFormHandlers(container) {
        const signUpForm = container.querySelector('.sign-up-container form');
        const logInForm = container.querySelector('.log-in-container form');

        if (signUpForm) {
            signUpForm.addEventListener('submit', handleFormSubmit);
        }

        if (logInForm) {
            logInForm.addEventListener('submit', handleFormSubmit);
        }
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        handleSuccessfulAuth();
    }

    function showForm() {
        const loginSignupContainer = createLoginForm();
        if (loginSignupContainer && overlay) {
            loginSignupContainer.style.display = 'block';
            overlay.style.display = 'block';
            document.body.classList.add('modal-open');
        }
    }

    function hideForm() {
        const loginSignupContainer = document.getElementById('login-signup-container');
        if (loginSignupContainer && overlay) {
            loginSignupContainer.style.display = 'none';
            overlay.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    }

    function handleSuccessfulAuth() {
        hideForm();
        isLoggedIn = true;
        navbarButtons.forEach(button => {
            if (button.id !== 'book-btn') {
                button.style.display = 'block';
            }
        });
        if (bookBtn) {
            bookBtn.style.display = 'block';
        }
        localStorage.setItem('isLoggedIn', 'true');
        window.isLoggedIn = true;
    }

    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            showForm();
            const container = document.getElementById('container');
            if (container) {
                container.classList.remove('right-panel-active');
            }
        });
    }

    if (signupBtn) {
        signupBtn.addEventListener('click', () => {
            showForm();
            const container = document.getElementById('container');
            if (container) {
                container.classList.add('right-panel-active');
            }
        });
    }

    overlay.addEventListener('click', hideForm);

    if (localStorage.getItem('isLoggedIn') === 'true') {
        isLoggedIn = true;
        window.isLoggedIn = true;
        navbarButtons.forEach(button => {
            if (button.id !== 'book-btn') {
                button.style.display = 'block';
            }
        });
        if (bookBtn) {
            bookBtn.style.display = 'block';
        }
    }

    // Check if user is already logged in
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        handleUserLogin(savedUser, false); // false means no need to show alert
    }

    // Add event listeners to the buttons directly
    const normalLogInBtn = document.querySelector('.log-in-container button:not(.ghost)');
    const normalSignUpBtn = document.querySelector('.sign-up-container button:not(.ghost)');

    if (normalLogInBtn) {
        normalLogInBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const emailInput = document.querySelector('.log-in-container input[type="email"]');
            if (emailInput && emailInput.value) {
                // Save to localStorage and handle login
                localStorage.setItem('currentUser', emailInput.value);
                handleUserLogin(emailInput.value, true);
            }
        });
    }

    if (normalSignUpBtn) {
        normalSignUpBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const emailInput = document.querySelector('.sign-up-container input[type="email"]');
            if (emailInput && emailInput.value) {
                // Save to localStorage and handle login
                localStorage.setItem('currentUser', emailInput.value);
                handleUserLogin(emailInput.value, true);
            }
        });
    }
});


