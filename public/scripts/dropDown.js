document.addEventListener('DOMContentLoaded', () => {
    const choiceContainer = document.querySelector('.default_option')
    const choices = document.querySelector('.select_ul')
    
    choiceContainer.addEventListener('click', e => {
        choices.classList.toggle('is-hidden');
    });

    choices.addEventListener('click', async (e) => {
        const genre = e.target.innerHTML
        const displayChoice = document.getElementById('displayChoice')
        displayChoice.innerHTML = genre
        choices.classList.toggle('is-hidden')
        try {
            const res = await fetch(`/movies/${genre}`, {
                method: 'GET'
            })
        } catch {
            console.log('error')
        }
    });
});