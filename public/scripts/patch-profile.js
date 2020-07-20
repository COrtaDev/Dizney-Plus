document.addEventListener('DOMContentLoaded', (e) => {
    const profileName = document.querySelector('.profile-name');
    let avatar = document.querySelector('.avatar');
    profileName.addEventListener("submit", async (event) => {
        event.preventDefault();
        const formData = new FormData(profileName);
        const name = formData.get('name');
        const isKid = formData.get('isKid');
        let avatarId = avatar.dataset.id
        await fetch(`${window.location.pathname}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name, avatarId: avatarId, isKid: isKid
            })
        })
        window.location.href = '/profiles/edit-profile'
    });
})
