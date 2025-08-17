window.onload = scrollMarquee();

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
    let i = 0;
    setInterval(function () {
        firstElement.style.marginLeft = `-${i}px`;
        if (i > firstElement.clientWidth) {
            i = 0;
        }
        i = i + 0.2;
    }, 0);
}