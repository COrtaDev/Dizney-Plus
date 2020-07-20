document.addEventListener('DOMContentLoaded', (e) => {//DOMContentLoaded
    
    const routes = document.querySelectorAll('[data-route]');
    routes.forEach(div => {
        div.addEventListener('click', e => {
            e.stopPropagation();
            const route = e.currentTarget.getAttribute('data-route');
            window.location.href = `/${route}`;
        });
    });
    
    const profileRoutes = document.querySelectorAll('[data-profile]');
    profileRoutes.forEach(profileRoute => {
        profileRoute.addEventListener('click', e => {
            const route = e.currentTarget.getAttribute('data-profile');
            window.location.href = `/home/${route}`;
        })
    });

    const logoutButton = document.querySelector('.logoutButton')
    logoutButton.addEventListener('click', e => {
        e.stopPropagation();
        window.location.href = "/"; 
    });

    const checkpoint = 72;

    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll <= checkpoint) {
            opacity = currentScroll / checkpoint;
        } else {
            opacity = 1;
        }
        document.querySelector(".nav-opacity").style.opacity = opacity;
    });
});