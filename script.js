function togglePanel() {
  document.getElementById("panel").classList.toggle("open");
}

function translate() {
  let text = document.getElementById("input").value.toLowerCase();
  let result = "Не найдено";

  if (text.includes("dead")) result = "очень смешно";
  if (text.includes("flex")) result = "хвастаться";
  if (text.includes("ghost")) result = "прекратить общение";
  if (text.includes("slay")) result = "выглядеть круто";

  document.getElementById("output").innerText = result;
}

function flipCard(card) {
  card.classList.toggle("flipped");
}

const scrollHint = document.querySelector('.scroll-global');
const container = document.querySelector('.container');

container.addEventListener('scroll', () => {
  scrollHint.style.opacity = '0';
});