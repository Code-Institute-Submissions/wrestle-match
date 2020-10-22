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

// Access the .deck ul class
const deck = document.querySelector(".deck");

// Global arrays
// Create an empty array to store flipped cards
let flipped = [];
// Create an empty array to store matched cards
let paired = [];
let moveCount = 0;

// Shuffle arrays function credit to https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array?
function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

shuffle(cardDeck);
console.log(cardDeck);

// Set card limit and number of current cards
let cardLimit = 8;
let currentCards = 0;

// Store the new shuffled cardDeck array in a new variable called shuffDeck and call the shuffle function on it
// Slice 4 objects from the array
let shuffDeck = shuffle(cardDeck).slice(0, 4);
console.log(shuffDeck);

// Create a new array by merging two copies of the new shuffDeck together
shuffDeck = shuffDeck.concat(shuffDeck);
console.log(shuffDeck);

// Added a helper function to add multiple attributes to img elements credit to https://stackoverflow.com/questions/12274748/setting-multiple-attributes-for-an-element-at-once-with-javascript?
function setAttributes(addImg, attrs) {
  for (let key in attrs) {
    addImg.setAttribute(key, attrs[key]);
  }
}

// Repeat over cardDeck array
for (let i = 0; i < shuffDeck.length; i++) {
  const liEl = document.createElement("li");
  liEl.classList.add("card");
  const addImg = document.createElement("img");
  liEl.appendChild(addImg);

  setAttributes(addImg, {
    src: "../assets/images/cards/" + shuffDeck[i],
    alt: "image of a professional wrestler",
  });
  deck.appendChild(liEl);
} // End of for loop

if (currentCards < cardLimit) {
  currentCards++;
}
console.log(cardDeck);

// Event listener if a card is selected
deck.addEventListener("click", function (evt) {
  if (evt.target.nodeName === "li") {
    console.log(evt.target.nodeName + " Was clicked");
    // Call functions
    flipCard();
  }

  function flipCard() {
    // When card is selected add .flip class to reveal card face image
    evt.target.classList.add("flip");
    addToFlipped();
  }

  function addToFlipped() {
    // If the flipped array has 0 or 1 image push another into the array for comparison
    if (flipped.length === 0 || flipped.length === 1) {
      // Push image to flipped array
      flipped.push(evt.target.firstElementChild);
    }
    compareTwo();
  }
});

function compareTwo() {
  if (flipped.length === 2 && flipped[0].src === flipped[1].src) {
    console.log("Matched cards");
  } else if (flipped.length === 2 && flipped[0].src != flipped[1].src) {
    noPair();
    console.log("Not a match");
  }
}

function match() {
  // Retrieve the two flipped cards and add .match class to the li element
  flipped[0].parentElement.classList.add("match");
  flipped[1].parentElement.classList.add("match");
  paired.push(flipped);
  flipped = [];
  // Add 1 to move count
  moveCounter();
}

function noPair() {
  setTimeout(function () {
    flipped[0].parentElement.classList.remove("flip");
    flipped[1].parentElement.classList.remove("flip");
    flipped = [];
  }, 800);
  // Add 1 to move count
  moveCounter();
}

function moveCounter() {
  moveCount = document.querySelector(".move-count");
  moveCount.innerHTML++;
}

console.log(paired);
console.log(flipped);
console.log(flipped.length);
