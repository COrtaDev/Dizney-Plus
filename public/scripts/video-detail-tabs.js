document.addEventListener("DOMContentLoaded", (event) => {
  const tabs = document.querySelectorAll(".bar .bar__tabs li");
  const sections = document.querySelectorAll(".bar .tabContent");
  const playRoutes = document.querySelectorAll('[play-route]');
  
  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      removeActiveTab();
      addActiveTab(tab);
    });
  });
  
  const removeActiveTab = () => {
    tabs.forEach((tab) => {
      tab.classList.remove("bar__tabs--active");
    });
    sections.forEach((section) => {
      section.classList.remove("bar__tabs--active");
    });
  };

  const addActiveTab = (tab) => {
    tab.classList.add("bar__tabs--active");
    const href = tab.querySelector("a").getAttribute("href");
    const matchingSection = document.querySelector(href);
    matchingSection.classList.add("bar__tabs--active");
  };
  
  playRoutes.forEach(playRoute => {
    playRoute.addEventListener('click', e => {
      e.stopPropagation();
      const route = e.currentTarget.getAttribute('play-route');
      window.location.href = `/video/${route}/player`;
    });
  });
});