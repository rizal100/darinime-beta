var backgroundrendom = document.querySelector('.button');

backgroundrendom.addEventListener('click', function (e) {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  if ((e.target.calassName = 'interaksi')) {
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
});
