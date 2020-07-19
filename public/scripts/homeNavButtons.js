document.addEventListener('DOMContentLoaded', () => {
    const routes = document.querySelectorAll('[data-route]');
    routes.forEach(div => {
        div.addEventListener('click', e => {
            e.stopPropagation()
            const route = e.currentTarget.getAttribute('data-route');
            window.location.href = `/${route}`;
        });
    });

    // const dropdown = document.querySelectorAll('.nav__dropdown');
    // dropdown.addEventListener('click', e => {
    //     e.stopPropagation();
    //     const route = e.currentTarget.getAttribute('data-route');
    //     window.location.href = `/${route}`;
    // })

    const logoutButton = document.querySelector('.logoutButton')
    logoutButton.addEventListener('click', e => {
        e.stopPropagation();
        window.location.href = "/"; 
    })
});