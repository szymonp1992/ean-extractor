const inputField = document.querySelector(".input");
const outputField = document.querySelector(".output");

let czechContent;

inputField.addEventListener("input", (e) => {
  czechContent = e.target.value;

  const czechContentwords = czechContent.split(/[.\s]+/);

  const numbers = [];

  for (let i = 0; i < czechContentwords.length; i++) {
    // Usuwanie -1 z końcówki EAN-u
    if (czechContentwords[i].includes("-1")) {
      numbers.push(czechContentwords[i]);
    }
    if (czechContentwords[i] > 11111) {
      numbers.push(czechContentwords[i]);
    }
    const czechContentEans = numbers.toString();
    outputField.value = czechContentEans;
  }
});
