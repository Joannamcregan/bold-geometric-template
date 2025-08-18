const links = document.querySelectorAll('.desktop-link');
const aboutLink = document.getElementById('about-link');
const aboutSection = document.getElementById('about-section');
const reviews = document.querySelectorAll('.review-box');

window.onload = addFlourishes();
window.addEventListener("scroll", () => { 
    handleSlideAnimation();
});

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const slideIn = (element) => {
    element.classList.add("sliding");
    setTimeout(()=>{
        element.classList.remove("slid");
    }, 500);
};

const slideOut = (element) => {
    element.classList.add("slid");
    element.classList.remove("sliding");
};

const handleSlideAnimation = () => {
    reviews.forEach((el) => {
        if (elementInView(el, 1.25)) {
            slideIn(el);
        } else if (elementOutofView(el)) {
            slideOut(el)
        }
    })
}

const addUnderline = (link) => {
    links.forEach((el) => {
        el.classList.remove("yellow-underline");
    })
    link.classList.add("yellow-underline");
}

const handleUnderlines = (sectionRef, linkRef) => {
    const section = document.querySelector(sectionRef);
    if (elementInView(section, 2)) {
        addUnderline(linkRef);
    }
}

function scrollMarquee() {
    const marquee = document.getElementById('marquee');
    const clone = marquee.innerHTML;
    const firstElement = marquee.children[0];
    marquee.insertAdjacentHTML('beforeend', clone);
    marquee.insertAdjacentHTML('beforeend', clone);
    marquee.insertAdjacentHTML('beforeend', clone);
    marquee.insertAdjacentHTML('beforeend', clone);
    marquee.insertAdjacentHTML('beforeend', clone);
    marquee.insertAdjacentHTML('beforeend', clone);
    marquee.insertAdjacentHTML('beforeend', clone);
    marquee.insertAdjacentHTML('beforeend', clone);
    marquee.insertAdjacentHTML('beforeend', clone);
    marquee.insertAdjacentHTML('beforeend', clone);
    let i = 0;
    setInterval(function () {
        firstElement.style.marginLeft = `-${i}px`;
        if (i > firstElement.clientWidth) {
            i = 0;
        }
        i = i + 0.2;
    }, 0);
}

function addFlourishes() {
    scrollMarquee();
    links.forEach((el) => {
        window.addEventListener("scroll", () => {
            handleUnderlines(el.getAttribute('href'), el);
        });
    })
}