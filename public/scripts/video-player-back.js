document.addEventListener('DOMContentLoaded', () => {
  const backButton = document.querySelector('.backButton');

  backButton.addEventListener('click', async (e) => {
    try {
      window.history.go(-1);
    } catch {
      console.log('error');
    }
  });
});
