// Write your solution here!
// Initialize the cats array
const cats = ["Milo", "Otis", "Garfield"];

// Destructive Functions
function destructivelyAppendCat(name) {
  cats.push(name); // Adds a cat to the end of the array
}

function destructivelyPrependCat(name) {
  cats.unshift(name); // Adds a cat to the beginning of the array
}

function destructivelyRemoveLastCat() {
  cats.pop(); // Removes the last cat from the array
}

function destructivelyRemoveFirstCat() {
  cats.shift(); // Removes the first cat from the array
}

// Nondestructive Functions
function appendCat(name) {
  return [...cats, name]; // Returns a new array with the cat appended
}

function prependCat(name) {
  return [name, ...cats]; // Returns a new array with the cat prepended
}

function removeLastCat() {
  return cats.slice(0, -1); // Returns a new array without the last cat
}

function removeFirstCat() {
  return cats.slice(1); // Returns a new array without the first cat
}
// Test destructive functions
destructivelyAppendCat("Whiskers");
console.log(cats); // ["Milo", "Otis", "Garfield", "Whiskers"]

destructivelyPrependCat("Tom");
console.log(cats); // ["Tom", "Milo", "Otis", "Garfield", "Whiskers"]

destructivelyRemoveLastCat();
console.log(cats); // ["Tom", "Milo", "Otis", "Garfield"]

destructivelyRemoveFirstCat();
console.log(cats); // ["Milo", "Otis", "Garfield"]

// Test nondestructive functions
const newCatsAppend = appendCat("Whiskers");
console.log(newCatsAppend); // ["Milo", "Otis", "Garfield", "Whiskers"]
console.log(cats); // ["Milo", "Otis", "Garfield"] (unchanged)

const newCatsPrepend = prependCat("Tom");
console.log(newCatsPrepend); // ["Tom", "Milo", "Otis", "Garfield"]
console.log(cats); // ["Milo", "Otis", "Garfield"] (unchanged)

const newCatsRemoveLast = removeLastCat();
console.log(newCatsRemoveLast); // ["Milo", "Otis"]
console.log(cats); // ["Milo", "Otis", "Garfield"] (unchanged)

const newCatsRemoveFirst = removeFirstCat();
console.log(newCatsRemoveFirst); // ["Otis", "Garfield"]
console.log(cats); // ["Milo", "Otis", "Garfield"] (unchanged)