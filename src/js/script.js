// const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
// let string = "";

// console.log(friends.join(", "));
// for (let word of friends) {
//   string = string + word;

//   if (word !== "Ajax") {
//     string += ", ";
//   }
// }
// console.log(string);

const cards = ["Card-1", "Card-2", "Card-3", "Card-4", "Card-5"];
const cardToRemove = "Card-3";

const indexToRemove = cards.indexOf(cardToRemove);
cards.splice(indexToRemove, 1);
console.log(cards);

const cardToInsert = "Card-6";
cards.push(cardToInsert);
console.log(cards);

const cardToUpdate = "Card-4-new";
const indexToUpdate = cards.indexOf("Card-4");

cards[indexToUpdate] = "card-12";
console.log(cards);
