const cardContainer = document.querySelector('.card-container');

cardContainer.addEventListener('click', function () {
    const card = document.querySelector('.card');
    card.style.transform = card.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
});
