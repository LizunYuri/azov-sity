const elementsAnimatedIcon = document.querySelectorAll('.icon-animated');
const body = document.body;
const wigetClick = document.getElementById('wiget-circle');
const wigetBody = document.getElementById('wiget-body');

const firstElement = elementsAnimatedIcon[0];
const secondElement = elementsAnimatedIcon[1];
const lastElement = elementsAnimatedIcon[2];


const iconAnimated = (elementToShow, elementToHide, secondElementToHide) => {
    elementToHide.classList.add('icon-opacity');
    secondElementToHide.classList.add('icon-opacity');
    elementToShow.classList.remove('icon-opacity');
}


secondElement.classList.add('icon-opacity');
lastElement.classList.add('icon-opacity');


setInterval(() => {
    iconAnimated(firstElement, secondElement, lastElement);
}, 1500);

setInterval(() => {
    iconAnimated(secondElement, firstElement, lastElement);
}, 3000);

setInterval(() => {
    iconAnimated(lastElement, secondElement, firstElement);
}, 4500);



const wigetShowClick = (event) => {
    event.stopPropagation();
    wigetBody.classList.toggle('wiget-body-opacity');
    wigetBody.classList.toggle('animated');
};

wigetClick.addEventListener('click', wigetShowClick);

body.addEventListener('click', (event) => {

    if (wigetBody.classList.contains('animated')) {
        wigetBody.classList.add('wiget-body-opacity');
        wigetBody.classList.remove('animated');
    }
});


wigetBody.addEventListener('click', (event) => {
    event.stopPropagation();
});
