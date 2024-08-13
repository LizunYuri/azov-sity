const elementHomeRight = document.getElementById('home-right');
const elementHomeLeft = document.getElementById('home-left');




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
    )
)