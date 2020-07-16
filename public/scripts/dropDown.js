// window.addEventListener('click', event => {
    
//     document.getElementsByClassName('.select_ul')
//     .classList.add('.is-hidden')
// })
document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.select_ul')

    dropdown.addEventListener('click', e => {
        dropdown.classList.toggle('is-hidden');
        console.log('test')
    });
});