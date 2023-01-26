const ham=document.querySelector('.ham')
const ham_menu = document.querySelector('.ham-menu')



ham.onclick = () => {
    ham.classList.toggle('open');
    ham_menu.classList.toggle('active')
}







const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navLink');
let current
// console.log(navLink);

window.addEventListener('scroll', function () {
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight/3) {
            current = section.getAttribute('id')
        }
    })
    console.log(current)
    navLinks.forEach(item => {
        item.classList.remove("active")
        if (item.classList.contains(current)) {
            item.classList.add('active')
        }
    })
})