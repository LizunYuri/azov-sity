const hoverEffect = document.querySelectorAll('.hover-effect');

const addHoverEffect = (items, effect, remove) => {
    items.forEach(element => {
        element.addEventListener('mouseover', () => {
            items.forEach(el => {
                if (el !== element) {
                    el.classList.add(remove);
                }
            });
            element.classList.add(effect);
        });

        element.addEventListener('mouseout', () => {
            items.forEach(el => {
                el.classList.remove(remove);
            });
            element.classList.remove(effect);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    addHoverEffect(hoverEffect, 'hovered', 'other-hovered');
});
