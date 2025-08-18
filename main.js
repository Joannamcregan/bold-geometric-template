const reviews = document.querySelectorAll('.review-box');

window.onload = scrollMarquee();
window.addEventListener("scroll", () => { 
    handleScrollAnimation();
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

const displayScrollElement = (element) => {
    element.classList.add("sliding");
    setTimeout(()=>{
        element.classList.remove("slid");
    }, 500);
};

const handleScrollAnimation = () => {
    reviews.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        } else if (elementOutofView(el)) {
            hideScrollElement(el)
        }
    })
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