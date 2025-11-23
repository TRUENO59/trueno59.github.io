const card = document.querySelector('.business-card');

if (card) {
    card.addEventListener('mousemove', (e) => {
        const { offsetWidth: width, offsetHeight: height } = card;
        const { offsetX: x, offsetY: y } = e;

        // Calculate rotation based on cursor position
        const rotationX = ((y / height) * -15) + 7.5; // Tilt up/down
        const rotationY = ((x / width) * 15) - 7.5;   // Tilt left/right

        card.style.transform = `perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
}