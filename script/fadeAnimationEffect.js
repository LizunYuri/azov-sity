const elementsFadeInRight = document.querySelectorAll('.fade-animation-loader-right')
const elementsSplitText = document.querySelectorAll('.split-text');
const elementsFlickIn = document.querySelectorAll('.flick-in');
const elementsFadeInLeft = document.querySelectorAll('.fade-animation-loader-left');
const elementsShuter = document.querySelectorAll('.shuter-text');
const elementsFedeInBottom = document.querySelectorAll('.fade-animation-loader-bottom');
const elementsFadeInTop = document.querySelectorAll('.fade-animation-loader-top');

const steps = document.getElementById('steps');
const stepEffectAnimated = document.querySelectorAll('.step-effect-animated');

const priorBody = document.getElementById('prior-body');
const priorBodyAnimated = document.querySelectorAll('.prior-body-animated');

const priorImg = document.getElementById('prior-img');
const priorEffectAnimated = document.querySelectorAll('.prior-effect-animated')

const projectsBlock = document.getElementById('projects-block');
const projectsBlockFace = document.querySelectorAll('.face-animated');

const teamCard = document.getElementById('team-card');
const teamCardAnimated = document.querySelectorAll('.tean-card-animated');

const team = document.getElementById('team');
const teamAnimated = document.querySelectorAll('.team-animated');

const footer = document.getElementById('footer');

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

const effectStepBlock = (block, 
    animatedBlocks, 
    effect, 
    timing,
    delay,
    percent) => {
    anyElementFadeIn = false;

    
    const position = block.getBoundingClientRect();
    const positionCenter = position.top + (position.height * percent);

    if (positionCenter < innerHeight) {
        animatedBlocks.forEach((e, index) => {
            setTimeout(() => {
                e.classList.add(effect);
                anyElementFadeIn = true;
                
            }, delay + (index * timing));

            
        });
        
    }
};

const footerAnimation = () => {

    const position = footer.getBoundingClientRect();
    const positionCenter = position.top + (position.height * 0.8);


    setTimeout(() => {
        footer.classList.add('fade-in-bottom')
    }, 500)
}


window.addEventListener('scroll', () => {

    scrollEffect(
        elementsFadeInRight, 
        'fade-in-right', 
        500
    );

    scrollEffectSplit(
        elementsSplitText
    );

    scrollEffect(
        elementsFlickIn, 
        'flick-in-block', 
        500
    );

    scrollEffect(
        elementsFadeInLeft, 
        'fade-in-left', 
        500
    );

    scrollEffect(
        elementsShuter, 
        'shuter', 
        1000
    );

    scrollEffect(
        elementsFedeInBottom, 
        'fade-in-bottom', 
        500
    );

    scrollEffect(
        elementsFadeInTop, 
        'fade-in-top', 
        500
    );

    effectStepBlock(
        steps,
        stepEffectAnimated, 
        'step-opacity', 
        300, 
        300, 
        0.3
    );

    effectStepBlock(
        priorBody,
        priorBodyAnimated,
        'step-opacity',
        1000,
        1000, 
        0.3,
    )

    
    effectStepBlock(
        priorImg, 
        priorEffectAnimated, 
        'step-opacity', 
        1000, 
        300,
        0.4
    );

    effectStepBlock(
        projectsBlock,
        projectsBlockFace,
        'step-opacity', 
        1000, 
        300, 
        0.3
    );

    effectStepBlock(
        team,
        teamAnimated,
        'step-opacity',
        1000,
        300,
        0.4
    )

    effectStepBlock(
        teamCard,
        teamCardAnimated, 
        'step-opacity', 
        500, 
        300, 
        0.3
    );
    footerAnimation()
});
