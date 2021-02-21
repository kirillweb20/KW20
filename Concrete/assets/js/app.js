document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.header__ul').classList.toggle('header__ul_active');
    document.querySelector('.hamburger').classList.toggle('is-active');
});



function scrollFunction() {
    let scrollPos = 700;
    let header = document.getElementById('header');

    if (document.body.scrollTop > scrollPos || document.documentElement.scrollTop > scrollPos) {
        header.classList.add('header_active');
    } else {
        header.classList.remove('header_active');
    }
};

window.onscroll = function () {
    scrollFunction()
};



const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute('href').substr(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: "smooth",
            block: 'start',
        });
    });
};



let modal = document.getElementById("my_modal"),

    btn = document.getElementById("btn_modal_window"),
    btn2 = document.getElementById("btn_2_modal_window"),
    btn3 = document.getElementById("tel_modal_window"),


    span = document.getElementsByClassName("modal__close")[0];

btn.onclick = function () {
    modal.style.display = "block";
};

btn2.onclick = function () {
    modal.style.display = "block";
};

btn3.onclick = function () {
    modal.style.display = "block";
};

span.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

let NavBurger = document.getElementById();
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};