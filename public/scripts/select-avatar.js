document.addEventListener('DOMContentLoaded', (e) => {
    let srcs = document.querySelectorAll('[data-src]');
    srcs.forEach(div => {
        div.addEventListener('click', (event) => {
            let url = event.currentTarget.getAttribute('data-src');
            window.location.href = `/profiles/add?${url}`
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
