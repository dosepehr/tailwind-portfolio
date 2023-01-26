// ham menu
const ham = document.querySelector('.ham')
const ham_menu = document.querySelector('.ham-menu')
const body=document.querySelector('body')


ham.onclick = (e) => {
    e.stopPropagation()
    ham.classList.toggle('open');
    ham_menu.classList.toggle('active')
}
body.onclick = () => {
    ham.classList.remove('open')
    ham_menu.classList.remove('active')
}




// navlinks active effect

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navLink');
let current

window.addEventListener('scroll', function () {
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight/3) {
            current = section.getAttribute('id')
        }
    })
    navLinks.forEach(item => {
        item.classList.remove("active")
        if (item.classList.contains(current)) {
            item.classList.add('active')
        }
    })
})