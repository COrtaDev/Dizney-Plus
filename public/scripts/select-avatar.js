window.addEventListener('DOMContentLoaded', (e) => {
    let url = window.location.search.substring(1);
    const newAvatar = document.getElementById('newAvatar');
    newAvatar.src = url;
    // window.addEventListener('click', (e) => {
    //     console.log(window.location.search)
    // })
})
