const text1 = document.querySelector(".rubber-band");
const text = text1.textContent;
const letters = text.split("");
let html = "";
const makeSpan = (letter) =>
  `<span class="rubber-letter">${letter}</span>`;

letters.forEach((letter) => (html += makeSpan(letter)));
text1.innerHTML = html;

