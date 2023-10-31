const linkInternos = document.querySelectorAll('.menu a[href^="#"');

function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
        behavior: 'smooth',
    });
}


linkInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
})

console.log(linkInternos);