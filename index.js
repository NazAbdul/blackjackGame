let firstCard = 10;
let secondCard = 4;
// created an array to store all the cards into one variable
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
  renderGame();
}

function renderGame() {
  // render out firstCard and secondCard/all the cards in the cardsEl
  cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
  sumEl.textContent = "sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  let card = 7;
  sum += card;
  renderGame();
}
