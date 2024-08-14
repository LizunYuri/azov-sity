const elementsFadeInRight = document.querySelectorAll('.fade-animation-loader-right')
const elementsSplitText = document.querySelectorAll('.split-text');
const elementsFlickIn = document.querySelectorAll('.flick-in');
const elementsFadeInLeft = document.querySelectorAll('.fade-animation-loader-left');
const elementsShuter = document.querySelectorAll('.shuter-text');
const elementsFedeInBottom = document.querySelectorAll('.fade-animation-loader-bottom');
const elementsFadeInTop = document.querySelectorAll('.fade-animation-loader-top');



const scrollEffect = (block, effect, timing) => {
    anyElementFadeIn = true;


    block.forEach(e => {
        const position = e.getBoundingClientRect();
        const positionCenter = position.top + (position.height * 0.3)
        
        if (positionCenter < window.innerHeight) {
            setTimeout(() => {
                e.classList.add(effect);
                anyElementFadeIn = true; 
            }, timing)
            
        }
    })
}


const fadeArray = (element, delay) => {
    let textContent = element.innerText;
    let textArray = textContent.split('');

    element.innerText = '';
    element.style.opacity = 1;

    textArray.forEach((char, index) => {
        setTimeout(() => {
            element.innerHTML += `<span>${char === ' ' ? '&nbsp;' : char}</span>`;
        }, index * delay);
    });

    
    element.classList.add('animated');
};

const scrollEffectSplit = (blocks) => {
    blocks.forEach(e => {
        
        if (!e.classList.contains('animated')) {
            const position = e.getBoundingClientRect();
            const positionCenter = position.top + (position.height * 0.5);

            if (positionCenter < window.innerHeight) {
                fadeArray(e, 55);
            }
        }
    });
};

window.addEventListener('scroll', () => {
    scrollEffect(elementsFadeInRight, 'fade-in-right', 1500);
    scrollEffectSplit(elementsSplitText);
    scrollEffect(elementsFlickIn, 'flick-in-block', 500);
    scrollEffect(elementsFadeInLeft, 'fade-in-left', 1500);
    scrollEffect(elementsShuter, 'shuter', 1000);
    scrollEffect(elementsFedeInBottom, 'fade-in-bottom', 1000);
    scrollEffect(elementsFadeInTop, 'fade-in-top', 1000)
});
