document.addEventListener('DOMContentLoaded', () => {
    const profileName = document.querySelector('.profile-name');
    const avatarId = document.querySelector('[data-route]');
    profileName.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(profileName);
        const profile = formData.values();
        console.log(profile)
        fetch("/profiles/edit/:id", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ profile, avatarId })
        }).then(res)
        window.localStorage.href = '/profiles/edit-profile'
    })
        .catch(error => {
            console.error(error);
        });
});
