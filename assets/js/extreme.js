let cardLimit = 60;
let currentCards = 0;
function startGame() {
  // Store the new shuffled cardDeck array in a new variable called shuffDeck and call the shuffle function on it
  // Slice 4 objects from the array
  let shuffDeck = shuffle(cardDeck).slice(0, 30);
  console.log(shuffDeck);

  // Create a new array by merging two copies of the new shuffDeck together
  let newDeck = shuffDeck.concat(shuffDeck);
  shuffle(newDeck);
  console.log(newDeck);

  // Repeat over cardDeck array
  for (let i = 0; i < newDeck.length; i++) {
    const liEl = document.createElement("LI");
    liEl.classList.add("card");
    const addImg = document.createElement("IMG");
    liEl.appendChild(addImg);
    // Added a helper function to add multiple attributes to img elements credit to https://stackoverflow.com/questions/12274748/setting-multiple-attributes-for-an-element-at-once-with-javascript?
    setAttributes(addImg, {
      src: "assets/images/cards/" + newDeck[i],
      alt: "image of a professional wrestler",
    });
    deck.appendChild(liEl);
  }
}
if (currentCards < cardLimit) {
  currentCards++;
  console.log(currentCards);
}
startGame();

function matchRating() {
  if (moves === 48) {
    stars[4].firstElementChild.classList.remove("fa-star");
    starCount--;
  }

  if (moves === 66) {
    stars[3].firstElementChild.classList.remove("fa-star");
    starCount--;
  }

  if (moves === 84) {
    stars[2].firstElementChild.classList.remove("fa-star");
    starCount--;
  }

  if (moves === 100) {
    stars[1].firstElementChild.classList.remove("fa-star");
    starCount--;
  }
}

function gameWon() {
  if (paired.length === 60) {
    console.log("Winner!");
    stopTime();
    modalStats();
    displayModal();
  }
}
