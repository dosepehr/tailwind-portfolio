// ham menu
const ham = document.querySelector('.ham');
const ham_menu = document.querySelector('.ham-menu');
const body = document.querySelector('body');

ham.onclick = (e) => {
    e.stopPropagation();
    ham.classList.toggle('open');
    ham_menu.classList.toggle('active');
};
body.onclick = () => {
    ham.classList.remove('open');
    ham_menu.classList.remove('active');
};

// navlinks active effect

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navLink');
let current;

window.addEventListener('scroll', function () {
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach((item) => {
        item.classList.remove('active');
        if (item.classList.contains(current)) {
            item.classList.add('active');
        }
    });
});

//! values animation

const values = document.querySelectorAll('.skill-value');
const observeValues = new IntersectionObserver((elements) => {
    elements.forEach((element) => {
        if (element.isIntersecting) {
            element.target.innerText = '0';

            const updateCounter = () => {
                const target = +element.target.getAttribute('data-goal');
                const c = +element.target.innerText;
                const inc = target / 100;
                if (c < target) {
                    element.target.innerText = `${Math.ceil(c + inc)}`;
                    setTimeout(updateCounter, 1);
                } else {
                    element.target.innerText = target;
                }
            };

            updateCounter();
            //             //!stop observing
            observeValues.unobserve(element.target);
        }
    });
});
values.forEach((el) => observeValues.observe(el));


//!bars animation
const bars = document.querySelectorAll('.skill-bar');
const observeBars = new IntersectionObserver((elements) => {
    elements.forEach((element) => {
        if (element.isIntersecting) {
            const increaseWidth = () => {
                let width = 0;
                const id = setInterval(() => {
                    if (width >= element.target.getAttribute('data-width')) {
                        clearInterval(id);
                    } else {
                        width++;
                        element.target.style.width = `${width}%`;
                    }
                }, 10);
            };
            increaseWidth();
            //!stop observing
            observeBars.unobserve(element.target);
        }
    });
});
bars.forEach((el) => observeBars.observe(el));

