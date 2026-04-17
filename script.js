function togglePanel() {
  document.getElementById("panel").classList.toggle("open");
}

function translate() {
  let text = document.getElementById("input").value.toLowerCase();
  let result = "Не найдено";

  if (text.includes("dead")) result = "очень смешно";
  else if (text.includes("flex")) result = "хвастаться";
  else if (text.includes("ghost")) result = "прекратить общение";
  else if (text.includes("slay")) result = "выглядеть круто";

  document.getElementById("output").innerText = result;
}

function flipCard(card) {
  card.classList.toggle("flipped");
}

const container = document.querySelector('.container');
const scrollHint = document.querySelector('.scroll-global');

let lastCardIndex = 0;

container.addEventListener('scroll', () => {

  if (scrollHint) {
    scrollHint.style.opacity = '0';
  }

  const cards = document.querySelectorAll('.card');
  const lastCard = cards[cards.length - 1];

  const rect = lastCard.getBoundingClientRect();

  // когда последняя карточка почти в зоне экрана
  if (rect.top < window.innerHeight * 0.3) {

    reshuffleCards();

    setTimeout(() => {
      container.scrollTo({
        top: 0,
        behavior: 'auto'
      });
    }, 100);
  }

});

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function reshuffleCards() {
  const cards = Array.from(container.children);

  shuffle(cards);

  cards.forEach(card => container.appendChild(card));
}