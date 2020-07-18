document.addEventListener('DOMContentLoaded', () => {
    const logInButton = document.getElementById('logIn')
    const DemologInButton = document.getElementById('demoLogIn')

    logInButton.addEventListener('click', async (e) => {
        try {
            window.location.href= "/account/login"
            
        } catch {
            console.log('error')
        }
    });

    DemologInButton.addEventListener('click', async (e) => {
        try {
            window.location.href= "/account/demologin"
            
        } catch {
            console.log('error')
        }
    });
});