function togglePanel() {
  document.getElementById("panel").classList.toggle("open");
}

async function translate() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");

  if (!input.trim()) {
    output.innerText = "Введите текст";
    return;
  }

  // красивый loading
  output.innerText = "Перевожу...";

  try {
    const response = await fetch("https://alice-ai-3fqj.onrender.com/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: input })
    });

    const data = await response.json();

    output.innerText = data.result;

  } catch (err) {
    output.innerText = "Ошибка подключения";
    console.error(err);
  }
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
window.translate = translate;
window.togglePanel = togglePanel;
window.flipCard = flipCard;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("translateBtn")
    .addEventListener("click", translate);
});