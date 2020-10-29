// Card deck image array
const cardDeck = [
  "a-black.jpg",
  "a-styles.jpg",
  "adam-bomb.jpg",
  "al-snow.jpg",
  "andre.jpg",
  "arn-anderson.jpg",
  "b-brawler.jpg",
  "bad-news-brown.jpg",
  "bam-bigelow.jpg",
  "bastion-booger.jpg",
  "batista.jpg",
  "berzerker.jpg",
  "big-bossman.jpg",
  "big-show.jpg",
  "billy-gunn.jpg",
  "blue-meanie.jpg",
  "bob-backlund.jpg",
  "bobby-roode.jpg",
  "boogeyman.jpg",
  "booker-t.jpg",
  "braun.jpg",
  "bret-hart.jpg",
  "brian-adams.jpg",
  "brian-pillman.jpg",
  "british-bulldog.jpg",
  "brock-lesnar.jpg",
  "bruno-sammartino.jpg",
  "brutus.jpg",
  "cactus.jpg",
  "chris-jericho.jpg",
  "cw-anderson.jpg",
  "damien-sandow.jpg",
  "daniel-bryan.jpg",
  "danny-doring.jpg",
  "dean-malenko.jpg",
  "diesel.jpg",
  "doink.jpg",
  "don-muraco.jpg",
  "drew-mcintyre.jpg",
  "droz.jpg",
  "e-guerrero.jpg",
  "earthquake.jpg",
  "edge.jpg",
  "elias.jpg",
  "finn-balor.jpg",
  "flash-funk.jpg",
  "gangrel.jpg",
  "george-steele.jpg",
  "gillberg.jpg",
  "godfather.jpg",
  "goldberg.jpg",
  "great-muta.jpg",
  "hakushi.jpg",
  "hardcore-holly.jpg",
  "hillbilly.jpg",
  "honky-tonk.jpg",
  "hugh-morrus.jpg",
  "hulk-hogan.jpg",
  "hurricane.jpg",
  "iron-sheik.jpg",
  "ivan-koloff.jpg",
  "jake-roberts.jpg",
  "jeff-hardy.jpg",
  "jerry-lawler.jpg",
  "jim-neidhart.jpg",
  "john-cena.jpg",
  "john-morrison.jpg",
  "jushin-liger.jpg",
  "justin-credible.jpg",
  "juventud-guerrera.jpg",
  "kama.jpg",
  "kamala.jpg",
  "kane.jpg",
  "ken-shamrock.jpg",
  "kevin-nash.jpg",
  "king-kong-bundy.jpg",
  "konnan.jpg",
  "kurt-angle.jpg",
  "lex-luger.jpg",
  "mantaur.jpg",
  "marc-mero.jpg",
  "marty-jannetty.jpg",
  "matt-hardy.jpg",
  "max-moon.jpg",
  "mikey-whipwreck.jpg",
  "mordecai.jpg",
  "mortis.jpg",
  "mr-perfect.jpg",
  "nailz.jpg",
  "nathan-jones.jpg",
  "new-jack.jpg",
  "nikolai-volkoff.jpg",
  "nova.jpg",
  "one-man-gang.jpg",
  "owen-hart.jpg",
  "perry-saturn.jpg",
  "psychosis.jpg",
  "randy-orton.jpg",
  "randy-savage.jpg",
  "raven.jpg",
  "razor.jpg",
  "rey-mysterio.jpg",
  "rhino.jpg",
  "ric-flair.jpg",
  "rick-martel.jpg",
  "rick-rude.jpg",
  "rick-steiner.jpg",
  "ricky-steamboat.jpg",
  "ricochet.jpg",
  "rikishi.jpg",
  "road-dogg.jpg",
  "roadkill.jpg",
  "rob-van-dam.jpg",
  "roddy-piper.jpg",
  "roman-reigns.jpg",
  "ron-simmons.jpg",
  "sabu.jpg",
  "samoa-joe.jpg",
  "scott-norton.jpg",
  "scott-steiner.jpg",
  "seth-rollins.jpg",
  "sgt-slaughter.jpg",
  "shawn-michaels.jpg",
  "sheamus.jpg",
  "shinsuke-nakamura.jpg",
  "sid.jpg",
  "skinner.jpg",
  "spike.jpg",
  "steve-austin.jpg",
  "steve-blackman.jpg",
  "steve-corino.jpg",
  "stevie-ray.jpg",
  "sting.jpg",
  "taka-michinoku.jpg",
  "tatanka.jpg",
  "tazz.jpg",
  "ted-dibiase.jpg",
  "the-fiend.jpg",
  "the-mountie.jpg",
  "the-patriot.jpg",
  "the-rock.jpg",
  "the-undertaker.jpg",
  "tommy-dreamer.jpg",
  "triple-h.jpg",
  "ultimate-warrior.jpg",
  "ultimo-dragon.jpg",
  "vader.jpg",
  "val-venis.jpg",
  "vampiro.jpg",
  "van-hammer.jpg",
  "virgil.jpg",
  "wahoo-mcdaniel.jpg",
  "warlord.jpg",
  "xpac.jpg",
  "yokozuna.jpg",
];

const mode = ["fatal4", "kingofthering", "battleroyal", "royalrumble"],
  title = document.querySelector(".mode-head"),
  deck = document.querySelector(".deck"),
  modal = document.querySelector("#gameWon"),
  restart = document.querySelector(".restart-btn"),
  newGame = document.querySelector(".new-game-btn"),
  moveCount = document.querySelector(".move-count"),
  stars = document.querySelector(".match-rating").querySelectorAll(".star"),
  timeCount = document.querySelector(".timer"),
  stats = document.querySelector(".modal-body");
  
let currentCards = 0,
  cardLimit = 0,
  flipped = [],
  paired = [],
  moves = 0,
  starCount = 5,
  time,
  minutes = 0,
  seconds = 0,
  startTime = false;

// Shuffle arrays function credit to https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array?
function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// Set card limit and number of current cards

function setAttributes(addImg, attrs) {
  for (let key in attrs) {
    addImg.setAttribute(key, attrs[key]);
  }
}

function startGame(mode) {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("mode");
  if (myParam === "fatal4") {
    title.innerHTML = "Fatal 4 (Easy)";
    cardLimit = 8;
  } else if (myParam === "kingofthering") {
    title.innerHTML = "King of the Ring (Medium)";
    cardLimit = 16;
  } else if (myParam === "battleroyal") {
    title.innerHTML = "Battle Royal (Hard)";
    cardLimit = 40;
  } else if (myParam === "royalrumble") {
    title.innerHTML = "Royal Rumble (Extreme)";
    cardLimit = 60;
  }
  // Store the new shuffled cardDeck array in a new variable called shuffDeck and call the shuffle function on it
  // Slice 4 objects from the array
  let shuffDeck = shuffle(cardDeck).slice(0, cardLimit / 2);
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
startGame(mode);

/*
Remove all child nodes from the deck <li> tags and
<img> tags.  To be called in set everything function only
*/
function removeCard() {
  // As long as <ul> deck has a child node, remove it
  while (deck.hasChildNodes()) {
    deck.removeChild(deck.firstChild);
  }
}

function timer() {
  time = setInterval(function () {
    seconds++;
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    timeCount.innerHTML =
      "<i class='fas fa-stopwatch'></i>" +
      " MATCH TIME: " +
      minutes +
      " MINS " +
      seconds +
      " SECS";
  }, 1000);
}

function stopTime() {
  clearInterval(time);
}

function resetAll() {
  stopTime();
  startTime = false;
  seconds = 0;
  minutes = 0;
  timeCount.innerHTML =
    "<i class='fas fa-stopwatch'></i>" +
    " MATCH TIME: " +
    minutes +
    " MINS " +
    seconds +
    " SECS";
  stars[1].firstElementChild.classList.add("fa-star");
  stars[2].firstElementChild.classList.add("fa-star");
  stars[3].firstElementChild.classList.add("fa-star");
  stars[4].firstElementChild.classList.add("fa-star");
  starCount = 5;

  moves = 0;
  moveCount.innerHTML = 0;

  paired = [];

  flipped = [];
  removeCard();
  stats.remove("p");
  startGame(mode);
}

function moveCounter() {
  moveCount.innerHTML++;
  moves++;
}

function matchRating() {
  if (moves === 6) {
    stars[4].firstElementChild.classList.remove("fa-star");
    starCount--;
  }

  if (moves === 10) {
    stars[3].firstElementChild.classList.remove("fa-star");
    starCount--;
  }

  if (moves === 14) {
    stars[2].firstElementChild.classList.remove("fa-star");
    starCount--;
  }

  if (moves === 18) {
    stars[1].firstElementChild.classList.remove("fa-star");
    starCount--;
  }
}

function compareTwo() {
  if (flipped.length === 2) {
    document.body.style.pointerEvents = "none";
  }
  if (flipped.length === 2 && flipped[0].src === flipped[1].src) {
    match();
    console.log("Matched cards");
  } else if (flipped.length === 2 && flipped[0].src != flipped[1].src) {
    setTimeout(function () {
      flipped[0].parentElement.classList.add("no-match");
      flipped[1].parentElement.classList.add("no-match");
    }, 200);
    noPair();
    console.log("Not a match");
  }
}

function match() {
  // Retrieve the two flipped cards and add .match class to the li element
  setTimeout(function () {
    flipped[0].parentElement.classList.add("match");
    flipped[1].parentElement.classList.add("match");
    paired.push(...flipped);
    // Allow further selecting of cards
    document.body.style.pointerEvents = "auto";
    gameWon();
    flipped = [];
  }, 500);
  // Add 1 to move count
  moveCounter();
  matchRating();
}

function noPair() {
  setTimeout(function () {
    flipped[0].parentElement.classList.remove("flip");
    flipped[1].parentElement.classList.remove("flip");
    flipped[0].parentElement.classList.remove("no-match");
    flipped[1].parentElement.classList.remove("no-match");
    // Allow further selecting of cards
    document.body.style.pointerEvents = "auto";
    flipped = [];
  }, 800);
  // Add 1 to move count
  moveCounter();
  matchRating();
}

function modalStats() {
  // Create three different paragraphs
  for (let i = 1; i <= 4; i++) {
    // Create a new Paragraph
    const statsEl = document.createElement("p");
    // Add a class to the new Paragraph
    statsEl.classList.add("stats");
    // Add the new created <p> tag to the modal content
    stats.appendChild(statsEl);
  }
  // Select all p tags with the class of stats and update the content
  let p = stats.querySelectorAll("p.stats");
  // Set the new <p> to have the content of stats (time, moves and star rating)
  p[0].innerHTML = "You found all " + cardLimit / 2 + " card pairs";
  p[1].innerHTML =
    "Match Finish Time: " + minutes + " Minutes and " + seconds + " Seconds";
  p[2].innerHTML = moves + " Moves Made";
  p[3].innerHTML = "Your Match Rating is: " + starCount + " out of 5 stars";
}

function displayModal() {
  const closeModal = document.getElementsByClassName("close")[0];
  modal.style.display = "block";
  closeModal.onclick = function () {
    modal.style.display = "none";
  };
}

function gameWon() {
  if (paired.length === cardLimit) {
    console.log("Winner!");
    stopTime();
    modalStats();
    displayModal();
  }
}

/*----------------------------------  
Main Event Listener
------------------------------------*/
/*
Event Listener if a card <li> is clicked
call flipCard()
*/
deck.addEventListener("click", function (evt) {
  console.log(evt.target.nodeName + " Was clicked");
  if (evt.target.nodeName === "LI") {
    console.log(evt.target.nodeName + " Was clicked");
    // Start the timer after the first click of one card
    // Executes the timer() function
    if (startTime === false) {
      startTime = true;
      timer();
    }
    // Call flipCard() function
    flipCard();
  }

  //Flip the card and display cards img
  function flipCard() {
    // When <li> is clicked add the class .flip to show img
    evt.target.classList.add("flip");
    // Call addToOpened() function
    addToFlipped();
  }

  //Add the fliped cards to the empty array of flipped
  function addToFlipped() {
    if (flipped.length === 0 || flipped.length === 1) {
      // Push that imgage to flipped array
      flipped.push(evt.target.firstElementChild);
    }
    // Call compareTwo() function
    compareTwo();
  }
});

console.log(paired);
console.log(paired.length);
console.log(flipped);
console.log(flipped.length);

restart.addEventListener("click", resetAll);

newGame.addEventListener("click", function () {
  modal.style.display = "none";
  resetAll();
});
