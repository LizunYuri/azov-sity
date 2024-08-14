const elementHomeRight = document.getElementById('home-right');
const elementHomeLeft = document.getElementById('home-left');
const elementMobilImage = document.getElementById('mobil-image-fade');
const elementHeader = document.getElementById('header');

const fadeAnimationFunction = (element, time, effect) => {
    setTimeout(() => {
        element.classList.add(effect)
    }, time)
}


document.addEventListener("DOMContentLoaded", 
    fadeAnimationFunction(
        elementHomeRight, 
        1000,
        'fade-in-right-finish'
    ),
    fadeAnimationFunction(
        elementHomeLeft,
        1000,
        'fade-in-right-finish'
    ),
    fadeAnimationFunction(
        elementMobilImage,
        1000,
        'fade-in-right-finish',
    ),
    fadeAnimationFunction(
        elementHeader,
        1000,
        'fade-in-top-finish',
    )
)