
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const title = ('Happy Teacher Day').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < title.length) {
        titleElement.innerHTML += title[index];
        index++;
        setTimeout(appendTitle, 100); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};

  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles2 = ('Bu Elsaaa').split('')
    const titleElement2 = document.getElementById('title2');
    let index = 0;

    function appendTitle2() {
      if (index < titles2.length) {
        titleElement2.innerHTML += titles2[index];
        index++;
        setTimeout(appendTitle2, 400); // 1000ms delay
      }
    }

    appendTitle2();

    clearTimeout(c);
  }, 1000);
