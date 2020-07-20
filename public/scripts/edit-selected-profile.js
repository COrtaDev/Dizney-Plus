document.addEventListener('DOMContentLoaded', e => {

    const routes = document.querySelectorAll('[data-route]');
    routes.forEach(div => {
        div.addEventListener('click', e => {
            const route = e.currentTarget.getAttribute('data-route');
            window.location.href = `/profiles/edit/${route}`;
        })
    })
    // document.removeEventListener('click',div)
    const deleteProfile = document.querySelector('.delete');
    deleteProfile.href = window.location.pathname
    // event.preventDefault();
})
