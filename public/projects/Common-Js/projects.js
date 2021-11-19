
let projectsData = [
    {
        'projectName': 'Basic Mechanical Engineering',
        'hrefLocation': 'https://basic-mechanical-engineering.herokuapp.com/'
    },
    {
        'projectName': 'Awesome cheat sheets',
        'hrefLocation': 'https://awesome-cheat-sheets.online/'
    },
    {
        'projectName': 'Rock-Paper-Scissor Game',
        'hrefLocation': 'https://www.web-developer-abhi.tk/RPS-Game/index.html'
    },
    {
        'projectName': 'Countdown Timer',
        'hrefLocation': 'https://www.web-developer-abhi.tk/countdown-timer/index.html'
    },
    {
        'projectName': 'Time Square News',
        'hrefLocation': 'https://www.web-developer-abhi.tk/time-square/index.html'
    },
    {
        'projectName': 'Secure Password Generator',
        'hrefLocation': 'https://www.web-developer-abhi.tk/Secure-password-generator/index.html'
    },
    {
        'projectName': 'Covid-19 Tracker',
        'hrefLocation': 'https://www.web-developer-abhi.tk/Covid-19-Tracker/index.html'
    },
    {
        'projectName': 'Periodic Table',
        'hrefLocation': 'https://www.web-developer-abhi.tk/Periodic-table/index.html'
    },
    {
        'projectName': 'Color-Game',
        'hrefLocation': 'https://www.web-developer-abhi.tk/Color-game/index.html'
    },
    {
        'projectName': 'Quiz App',
        'hrefLocation': 'https://www.web-developer-abhi.tk/Quiz-app/index.html'
    },
    {
        'projectName': 'Food Demo Site',
        'hrefLocation': 'https://www.web-developer-abhi.tk/Food-site/index.html'
    },
    {
        'projectName': 'Photo Finder',
        'hrefLocation': 'https://www.web-developer-abhi.tk/Photos-finder/index.html'
    },
    {
        'projectName': 'Quotes-for-life',
        'hrefLocation': 'https://www.web-developer-abhi.tk/Quotes-for-life/index.html'
    }
];

const webpageLinks = document.querySelector('.webpage-links');

Array.from(projectsData).forEach(projects => {
    webpageLinks.innerHTML += `
        <a href="${projects.hrefLocation}" target="_blank">${projects.projectName}</a>
    `
})