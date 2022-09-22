// // ivent handling
// const close = document.querySelector('div.close');
// const card = document.querySelector('.card');

// card.addEventListener('click', function () {
//   card.style.display = 'none';
// });

// // dom traversal

// // v1;

// const close = document.querySelectorAll('.close');

// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener('click', function (e) {
//     // alert('tombol ke - ' + i);
//     // close[i].parentElement.style.display = 'none';
//     // console.log(e.);
//     e.target.parentElement.style.display = 'none';
//   });
// }

// // v2

// const close = document.querySelectorAll('.close');

// close.forEach(function (e) {
//   e.addEventListener('click', function (e) {
//     e.target.parentElement.style.display = 'none';
//     // metod untuk menghilangkan fungsi defauld
//     e.preventDefault();
//     // method untuk menghilangkan fungsi bubbling
//     e.stopPropagation();
//   });
// });

// // silsila keluarga

// const nama = document.querySelector('.nama');
// console.log(nama);
// console.log(nama.parentElement);
// console.log(nama.parentElement.parentElement);
// console.log(nama.nextElementSibling);
// console.log(nama.nextElementSibling.nextElementSibling);
// console.log(nama.previousElementSibling);
// console.log(nama.previousElementSibling.previousElementSibling);
// // console.log(nama.nextSibling);

// // contoh bubbling

// const cards = document.querySelectorAll('.card');
// cards.forEach(function (params) {
//   params.addEventListener('click', function (e) {
//     alert('anjay');
//   });
// });

// v3

const container = document.querySelector('.container');

container.addEventListener('click', function (e) {
  if (e.target.className == 'close') {
    e.target.parentElement.style.display = 'none';
    e.preventDefault();
  }
});
