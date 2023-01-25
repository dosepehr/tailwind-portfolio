const ham=document.querySelector('.ham')
const ham_menu = document.querySelector('.ham-menu')



ham.onclick = () => {
    ham.classList.toggle('open');
    ham_menu.classList.toggle('active')
}