const toggler = document.querySelector(".nav__toggler");
console.log(toggler);
const navbar = document.querySelector(".navbar");
console.log(navbar);
toggler.addEventListener("click", (e) => {
  navbar.classList.toggle("nav__expanded");
});

const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab--content");
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const targetTabContent = document.querySelector(`#${tab.dataset.tabTarget}`);

    // REMOVE PREVIOUS ACTIVED CLASSES
    tabs.forEach((tab) => tab.classList.remove("active"));
    tabContents.forEach((tabContent) => tabContent.classList.remove("active"));

    // ADD NEW ACTIVE CLASSES
    tab.classList.add("active");
    targetTabContent.classList.add("active");
  });
});

