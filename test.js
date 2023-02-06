
let deck = [1, 2, 3, 4];

function threeOfEachThree(deck) {
  deck.reduce((accumulator, currentValue) => {
    if (currentValue === 3){
      accumulator.deck.push(currentValue);
    };
    return accumulator;
  })
}

console.log(threeOfEachThree(deck);
