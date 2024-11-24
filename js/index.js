// Title pertama
const title1 = document.querySelector('.title');
const text1 = 'DIBUKA YAA BUU ELSAAAA !!!'.split('');
for (let index = 0; index < text1.length; index++) {
  if (text1[index] !== ' ') {
    title1.innerHTML += `<span>${text1[index]}</span>`;
  } else {
    title1.innerHTML += `<span style="margin-right: 10px;"></span>`;
  }
}

const textElements1 = document.querySelectorAll('.title span');
textElements1.forEach((element) => {
  const randomDelay = Math.random() * 3; // Delay acak antara 0 dan 3 detik
  element.style.animationDelay = `${randomDelay}s`;
});

// Title kedua
const title2 = document.querySelector('.title2');
const text2 = 'By Revaldo,Ridho,Ikhsan'.split('');
for (let index = 0; index < text2.length; index++) {
  if (text2[index] !== ' ') {
    title2.innerHTML += `<span>${text2[index]}</span>`;
  } else {
    title2.innerHTML += `<span style="margin-right: 5px;"></span>`;
  }
}

const textElements2 = document.querySelectorAll('.title2 span');
textElements2.forEach((element) => {
  const randomDelay2 = Math.random() * 1; // Delay acak antara 0 dan 3 detik
  element.style.animationDelay = `${randomDelay2}s`;
});
