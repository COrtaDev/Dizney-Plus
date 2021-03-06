document.addEventListener('DOMContentLoaded', () => {
    const choiceContainer = document.querySelector('.default_option')
    const choices = document.querySelector('.select_ul')
    
    choiceContainer.addEventListener('click', e => {
        choices.classList.toggle('is-hidden');
    });

    choices.addEventListener('click', async (e) => {
        const genre = e.target.innerHTML
        if(genre === 'Featured') {
            window.location.href= `/series`
        } else {
            const displayChoice = document.getElementById('displayChoice')
            displayChoice.innerHTML = genre
            choices.classList.toggle('is-hidden')
            try {
                
                window.location.href= `/series/${genre}`
                
            } catch {
                console.log('error')
            }
        }
    });
});