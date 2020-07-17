// function openCity(evt, cityName) {
//   // Declare all variables
//   var i, tabcontent, tablinks;

//   // Get all elements with class="tabcontent" and hide them
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }

//   // Get all elements with class="tablinks" and remove the class "active"
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }

//   // Show the current tab, and add an "active" class to the button that opened the tab
//   document.getElementById(cityName).style.display = "block";
//   evt.currentTarget.className += " active";
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const choiceContainer = document.querySelector('.default_option')
//     const choices = document.querySelector('.select_ul')
    
//     choiceContainer.addEventListener('click', e => {
//         choices.classList.toggle('is-hidden');
//     });

//     choices.addEventListener('click', async (e) => {
//         const genre = e.target.innerHTML
//         const displayChoice = document.getElementById('displayChoice')
//         displayChoice.innerHTML = genre
//         choices.classList.toggle('is-hidden')
//         try {
//             const res = await fetch(`/movies/${genre}`, {
//                 method: 'GET'
//             })
//         } catch {
//             console.log('error')
//         }
//     });
// });