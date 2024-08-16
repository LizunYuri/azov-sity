const toggle = document.querySelectorAll('.toggle');
const burgerButton = document.querySelector('.header-body-mobil');
const burgerBody = document.querySelector('.burger-body')
const mobilNav = document.querySelector('.mobil-nav');


const toggleAnimation = () => {
    const firstToggle = toggle[0];
    const secondToggle = toggle[1];
    const lastToggle = toggle[2];

    
    secondToggle.classList.toggle('toggle-opacity');
    firstToggle.classList.toggle('toggle-first');
    lastToggle.classList.toggle('toggle-last');
    burgerBody.classList.toggle('burger-active');
    mobilNav.classList.toggle('fixed')

    
    secondToggle.classList.toggle('toggle-one');
    firstToggle.classList.toggle('toggle-two');
    lastToggle.classList.toggle('toggle-theree');

    
}

const burgerClick = () => {
    toggleAnimation();
}

burgerButton.addEventListener('click', burgerClick);
