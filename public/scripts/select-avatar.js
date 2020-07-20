document.addEventListener('DOMContentLoaded', (e) => {
    let srcs = document.querySelectorAll('[data-src]');
    srcs.forEach(div => {
        div.addEventListener('click', (event) => {
            let url = event.currentTarget.getAttribute('data-src');
            let id = event.currentTarget.getAttribute('data-id');
            window.location.href = `/profiles/add/${id}?${url}`
        })
    })
})
// let newAvatar = document.getElementById('newAvatar');
// newAvatar.src = url;
// let url = window.location.search.substring(1);
// window.addEventListener('click', (e) => {
    //     console.log(window.location.search)
    // .then(() => {

        // event.preventDefault();
        // const newAvatar = document.getElementById('newAvatar');
        // newAvatar.src = url;
