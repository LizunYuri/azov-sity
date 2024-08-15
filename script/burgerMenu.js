const toggle = document.querySelectorAll('.toggle');
const burgerButton = document.querySelector('.header-body-mobil');

const toggleAnimation = () => {
    const firstToggle = toggle[0];
    const secondToggle = toggle[1];
    const lastToggle = toggle[2]; // исправлено на lastToggle

    // Используем toggle, чтобы переключать классы
    secondToggle.classList.toggle('toggle-opacity');
    firstToggle.classList.toggle('toggle-first');
    lastToggle.classList.toggle('toggle-last');
    // burgerButton.classList.add('position-fixed');

    console.log('click')
}

const burgerClick = () => {
    toggleAnimation();
}

burgerButton.addEventListener('click', burgerClick);
