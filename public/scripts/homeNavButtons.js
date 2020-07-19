document.addEventListener('DOMContentLoaded', (e) => {//DOMContentLoaded
    
    const routes = document.querySelectorAll('[data-route]');
    routes.forEach(div => {
        div.addEventListener('click', e => {
            e.stopPropagation()
            const route = e.currentTarget.getAttribute('data-route');
            window.location.href = `/${route}`;
        });
    });

    const profileDropdown = document.querySelector('.nav__dropdown');
    // console.log(dropdown);
    profileDropdown.addEventListener('click', e => {
        // e.stopPropagation();
        const route = e.currentTarget.getAttribute('data-route');
        window.location.href = `/${route}`;
    });

    const logoutButton = document.querySelector('.logoutButton')
    logoutButton.addEventListener('click', e => {
        e.stopPropagation();
        window.location.href = "/"; 
    });
});