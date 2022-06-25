const cardArray = [
  {
    name: 'fries',
    img: 'fries.png',
  },
  {
    name: 'cheeseburger',
    img: 'cheeseburger.png',
  },
  {
    name: 'hotdog',
    img: 'hotdog.png',
  },
  {
    name: 'ice-cream',
    img: 'ice-cream.png',
  },
  {
    name: 'milkshake',
    img: 'milkshake.png',
  },
  {
    name: 'pizza',
    img: 'pizza.png',
  },
  {
    name: 'fries',
    img: 'fries.png',
  },
  {
    name: 'cheeseburger',
    img: 'cheeseburger.png',
  },
  {
    name: 'hotdog',
    img: 'hotdog.png',
  },
  {
    name: 'ice-cream',
    img: 'ice-cream.png',
  },
  {
    name: 'milkshake',
    img: 'milkshake.png',
  },
  {
    name: 'pizza',
    img: 'pizza.png',
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardChosen = [];
let cardChosenIds = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img');
    card.setAttribute('src', 'blank.png');
    card.setAttribute('data-id', i);
    card.addEventListener('click', flipCard);
    gridDisplay.appendChild(card);
  }
};
createBoard()

function checkMatch() {
  const cards = document.querySelectorAll('img');
  const optionOneId = cardChosenIds[0];
  const optionTwoId = cardChosenIds[1];

  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute('src', 'blank.png');
    cards[optionTwoId].setAttribute('src', 'blank.png');
    alert('You have clicked the same image!');
  }

  if (cardChosen[0] == cardChosen[1]) {
    alert('You found a match!')
    cards[optionOneId].setAttribute('src', 'white.png');
    cards[optionTwoId].setAttribute('src', 'white.png');
    cards[optionOneId].removeEventListener('click', flipCard);
    cards[optionTwoId].removeEventListener('click', flipCard);
    cardsWon.push(cardChosen);
  } else {
    cards[optionOneId].setAttribute('src', 'blank.png');
    cards[optionTwoId].setAttribute('src', 'blank.png');
    alert('Sorry try again!');
  }
  resultDisplay.textContent = cardsWon.length
  cardChosen = [];
  cardChosenIds = [];

  if (cardsWon.length == (cardArray.length/2)) {
    resultDisplay.textContent = 'Congratulations you found them all!'
  }
}

function flipCard() {
  const cardId = this.getAttribute('data-id');
  cardChosen.push(cardArray[cardId].name);
  cardChosenIds.push(cardId);

  this.setAttribute('src', cardArray[cardId].img);
  if (cardChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
};

