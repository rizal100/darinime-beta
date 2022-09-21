var tombolint = document.querySelector('.button');

tombolint.addEventListener('click', function (e) {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);

  if ((e.target.calassName = 'interaksi')) {
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
  if (e.target.calassName == 'interaksi2') {
    document.body.style.color = `rgb(${r}, ${g}, ${b})`;
  }
});
