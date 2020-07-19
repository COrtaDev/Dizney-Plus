document.addEventListener('DOMContentLoaded', () => {
    const logInButton = document.getElementById('logIn')
    const demologInButton = document.getElementById('demoLogIn')

    logInButton.addEventListener('click', async (e) => {
        try {
            window.location.href = "/account/login"
            
        } catch {
            console.log('error')
        }
    });

    demologInButton.addEventListener('click', async (e) => {
        try {
            window.location.href = "/account/demologin"
            
        } catch {
            console.log('error')
        }
    });
});