document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const loginId = document.getElementById("login-id").value.trim();
    const password = document.getElementById("password").value.trim();
    let valid = true;

    // Clear previous error messages
    document.getElementById("login-id-error").textContent = '';
    document.getElementById("password-error").textContent = '';

    // Basic validation
    if (loginId === '') {
        document.getElementById("login-id-error").textContent = 'Login ID is required.';
        valid = false;
    }

    if (password === '') {
        document.getElementById("password-error").textContent = 'Password is required.';
        valid = false;
    }

    if (valid) {
        const loginButton = document.getElementById("login-btn");

        // Change button to loading state
        loginButton.disabled = true; // Disable the button during the loading state
        loginButton.style.backgroundColor = 'grey';
        loginButton.innerHTML = '<div class="loader"></div>'; // Show loader in the button

        // Simulate a successful login with a timeout
        setTimeout(() => {
            const loginSection = document.querySelector('.login-section');
            const imageSection = document.querySelector('.image-section');

            // Hide the left section (login form)
            loginSection.style.opacity = '0'; // Add smooth fade-out effect

            // Shrink and hide the right image section
            imageSection.classList.add('shrink');

            setTimeout(() => {
                // Show the centered logo
                const logo = document.createElement('div');
                logo.innerHTML = '<img src="images/logo.jpg" alt="Logo" width="100px">';
                logo.classList.add('centered-logo');
                document.body.appendChild(logo);
                logo.style.opacity = '1'; // Make the logo visible
                logo.classList.add('active'); 

                // Delayed by 2 seconds to sync with the logo animation
                setTimeout(() => {
                    logo.style.display = 'none'; // Hide the centered logo
                    imageSection.classList.remove('shrink'); 
                    imageSection.classList.add('expanded'); // Expand the image to full screen

                    // After a short delay, reset everything back to the original layout
                    setTimeout(() => {
                        imageSection.classList.remove('expanded'); // Remove expanded effect
                        imageSection.style.opacity = '1'; // Make the image visible again
                        imageSection.style.display = 'flex'; // Show the image section again
                        loginButton.innerHTML = 'Login'; // Reset the button text
                        loginButton.style.backgroundColor = ''; // Reset button color
                        loginButton.disabled = false; // Re-enable the button
                        loginSection.style.opacity = '1'; // Bring back the login form smoothly
                        loginSection.style.display = 'flex'; // Show login form again

                        // Clear the login ID and password fields
                        document.getElementById("login-id").value = ''; // Clear login ID
                        document.getElementById("password").value = ''; // Clear password
                    }, 1500); // Wait to reset layout
                }, 500); // Show the centered logo for 2 seconds
            }, 2000); // Shrinking animation duration
        }, 2000); // Simulate loading before shrinking
    }
});