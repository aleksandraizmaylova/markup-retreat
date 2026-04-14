let clicked = false;
document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.wrapper');
    const stars = wrapper.querySelectorAll('.star');
    stars.forEach((star, index) => {
        star.addEventListener('mouseenter', () => {
            stars.forEach((s, i) => {
                s.classList.toggle('is-filled', i <= index);
            });
        });
    });
    wrapper.addEventListener('mouseleave', () => {
        if (!clicked)
            stars.forEach(s => s.classList.remove('is-filled'));
    })
    wrapper.addEventListener('click', () => {
        clicked = !clicked;
    })
});