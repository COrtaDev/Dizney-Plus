document.addEventListener('DOMContentLoaded', (e) => {
    let url = window.location.search.substring(1);
    let id = window.location.pathname.substring(14, 16)
    let newAvatar = document.getElementById('newAvatar');
    let form = document.querySelector('.add-profile');
    form.action = `/profiles/add/${id}`;
    newAvatar.src = url
    // let profileName = document.querySelector('.profile-name');
    // let avatar = document.querySelector('.avatar');
    // profileName.addEventListener("submit", async (event) => {
    //     event.preventDefault();
    //     let formData = new FormData(profileName);
    //     let name = formData.get('name');
    //     let isKid = formData.get('isKid');
    //     let avatarId = avatar.dataset.id
    //     await fetch(`${window.location.pathname}`, {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             name: name, avatarId: avatarId, isKid: isKid
    //         })
    //     })
    //     window.location.href = '/profiles/edit-profile'
    // });
})
