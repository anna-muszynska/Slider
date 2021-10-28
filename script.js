'use strict';

const buttonPre = document.querySelector('.button1');
const buttonNxt = document.querySelector('.button2');

let divArr = [...document.querySelectorAll('div')];

buttonPre.addEventListener('click', previousImage);

function previousImage(_e) {
  for (let i = 0; i < divArr.length; i++) {
    let num =
      Number(
        [...document.querySelector(`.div${i + 1}`).classList].pop().slice(-1)
      ) + 1;

    if (num > 7) {
      num = 1;
    }

    divArr[i].classList.remove(
      [...document.querySelector(`.div${i + 1}`).classList].pop()
    );
    if (i === 6) {
      divArr[i].classList.add(`image${num}`);
    } else {
      divArr[i].classList.add(`image${num}`);
    }
  }
}

buttonNxt.addEventListener('click', nextImage);

function nextImage(_e) {
  for (let i = 0; i < divArr.length; i++) {
    let num =
      Number(
        [...document.querySelector(`.div${i + 1}`).classList].pop().slice(-1)
      ) - 1;

    if (num < 1) {
      num = 7;
    }

    divArr[i].classList.remove(
      [...document.querySelector(`.div${i + 1}`).classList].pop()
    );
    if (i === 6) {
      divArr[i].classList.add(`image${num}`);
    } else {
      divArr[i].classList.add(`image${num}`);
    }
  }
}

console.log([...document.querySelector(`.div3`).classList].pop().slice(-1));

document.addEventListener('keydown', e => {
  e.preventDefault();
  if (e.key === 'ArrowRight') {
    return nextImage();
  }
});

document.addEventListener('keydown', e => {
  e.preventDefault();
  if (e.key === 'ArrowLeft') {
    return previousImage();
  }
});
