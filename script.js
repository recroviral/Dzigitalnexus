let isFlipped = false;

document.getElementById('card').addEventListener('click', function () {
  const inner = this.querySelector('.inner');

  if (isFlipped) {
    inner.style.transform = 'rotateY(0deg)';
  } else {
    inner.style.transform = 'rotateY(180deg)';
  }

  isFlipped = !isFlipped;
});
