
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery img');
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    const img = document.createElement('img');
    lightbox.appendChild(img);

    images.forEach(image => {
        image.addEventListener('click', e => {
            img.src = image.src;
            lightbox.style.display = 'flex';
        });
    });

    lightbox.addEventListener('click', e => {
        if (e.target !== img) {
            lightbox.style.display = 'none';
        }
    });
});
