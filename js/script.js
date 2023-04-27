

window.addEventListener('scroll', function () {
    console.log('test')
    var navbar = document.getElementById("navbar");
    console.log(navbar)
    if (window.scrollY > 630) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


//TypeIt Animation

/* document.addEventListener('DOMContentLoaded', function() {
    new TypeIt('#first-type', { //content
            strings: ['Meine Mini-Projete'],
            loop: [true],
            loopDelay: 3500,
            nextStringDelay: 750
        })
        .pause(200)
        .move(-2)
        .type("k")
        .move(+2)
        .type(': Frontend')
        .go();
});

function setVw() {
    let vw = document.documentElement.clientWidth / 100;
    document.documentElement.style.setProperty('--vw', `${vw}px`);
}
 */




