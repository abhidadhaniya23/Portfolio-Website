let projectsData = [
  {
    projectName: "Basic Mechanical Engineering",
    hrefLocation: "https://basic-mechanical-engineering.herokuapp.com/",
  },
  {
    projectName: "Awesome cheat sheets",
    hrefLocation: "https://awesome-cheat-sheets.online/",
  },
  {
    projectName: "Image Gallery UI",
    hrefLocation: "https://image-gallery-ui.netlify.app/",
  },
  {
    projectName: "Rock-Paper-Scissor Game",
    hrefLocation: "/RPS-Game/index.html",
  },
  {
    projectName: "Countdown Timer",
    hrefLocation: "/countdown-timer/index.html",
  },
  {
    projectName: "Time Square News",
    hrefLocation: "/time-square/index.html",
  },
  {
    projectName: "Secure Password Generator",
    hrefLocation: "/Secure-password-generator/index.html",
  },
  {
    projectName: "Covid-19 Tracker",
    hrefLocation: "/Covid-19-Tracker/index.html",
  },
  {
    projectName: "Periodic Table",
    hrefLocation: "/Periodic-table/index.html",
  },
  {
    projectName: "Color-Game",
    hrefLocation: "/Color-game/index.html",
  },
  {
    projectName: "Quiz App",
    hrefLocation: "/Quiz-app/index.html",
  },
  {
    projectName: "Food Demo Site",
    hrefLocation: "/Food-site/index.html",
  },
  {
    projectName: "Photo Finder",
    hrefLocation: "/Photos-finder/index.html",
  },
  {
    projectName: "Quotes-for-life",
    hrefLocation: "/Quotes-for-life/index.html",
  },
];

const webpageLinks = document.querySelector(".webpage-links");

Array.from(projectsData).forEach((projects) => {
  webpageLinks.innerHTML += `
        <a href="${projects.hrefLocation}" target="_blank">${projects.projectName}</a>
    `;
});
