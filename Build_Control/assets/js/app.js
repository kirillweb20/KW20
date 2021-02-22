document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.header__ul').classList.toggle('header__ul_active');
    document.querySelector('.hamburger').classList.toggle('is-active');
});