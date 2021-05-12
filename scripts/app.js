const showNav = () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav-li');
    const navLinks = document.querySelectorAll('.nav-li li');

    menu.addEventListener('click', () => {
        nav.classList.toggle('nav-clicked');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `showNavLinks 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
            }
        });
        menu.classList.toggle('toggle');
    });
};

showNav();