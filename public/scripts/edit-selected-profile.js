document.addEventListener('DOMContentLoaded', e => {
    const routes = document.querySelectorAll('[data-route]');
    routes.forEach(div => {
        div.addEventListener('click', e => {
            const route = e.currentTarget.getAttribute('data-route');
            window.location.href = `/profiles/edit/${route}`;
        })
    })
})
