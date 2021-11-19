let firstSection = document.getElementById('first');

let backgrounds = ['photos/11', 'photos/22', 'photos/33'];

let i = 0;

// setInterval(() => {
//     firstSection.style.background = `url(${backgrounds[i]}.jpg)`;
//     firstSection.style.backgroundSize = 'cover';
//     firstSection.style.backgroundPosition = 'center';
//     firstSection.style.backgroundAttachment = 'fixed';
//     i++;
//     if (i >= backgrounds.length) {
//         i = 0;
//     }
//     firstSection.style.transition = 'background 1.5s ease';

// }, 5000);

let logo = document.getElementById('logo');
let ul = document.getElementById('ul');

if (window.innerWidth > 670) {

    window.onscroll = function () {

        if (scrollY > 10) {
            logo.innerHTML = `<img class="thelogo" src="logo/logo1.png">`
            document.querySelector('nav').style.background = 'rgba(255, 255, 255, 0.486)';
            document.getElementById('logo').style.color = 'black'
            document.getElementById('home').style.color = 'black';
            document.getElementById('foods').style.color = 'black';
            document.getElementById('services').style.color = 'black';
            document.getElementById('about').style.color = 'black';
            document.getElementById('contact').style.color = 'black';
            document.getElementById('logo').style.color = 'black';
            document.getElementById('topBtn').style.opacity = '1';
        }
        else {
            logo.innerHTML = `<img class="thelogo" src="logo/logo2.png">`
            document.querySelector('nav').style.background = 'rgb(10,33,53)';
            document.getElementById('logo').style.color = 'whitesmoke'
            document.getElementById('home').style.color = 'whitesmoke';
            document.getElementById('foods').style.color = 'whitesmoke';
            document.getElementById('services').style.color = 'whitesmoke';
            document.getElementById('about').style.color = 'whitesmoke';
            document.getElementById('contact').style.color = 'whitesmoke';
            document.getElementById('topBtn').style.opacity = '0';
        }
    }
}
else {
    window.onscroll = function () {
        if (scrollY > 50) {
            document.getElementById('topBtn').style.opacity = '1';
        }
        else {
            document.getElementById('topBtn').style.opacity = '0';
        }
    }
}

document.getElementById('first').addEventListener('click', closemenu);
document.getElementById('second').addEventListener('click', closemenu);
document.getElementById('third').addEventListener('click', closemenu);
document.getElementById('forth').addEventListener('click', closemenu);
document.getElementById('fifth').addEventListener('click', closemenu);
document.getElementById('footer').addEventListener('click', closemenu);

function showmenu() {
    ul.style.left = '0';
}
function closemenu() {
    ul.style.left = '-130px';
}