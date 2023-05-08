class Deck {
  constructor() {
    this.deck = [];

    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

    for (let suit in suits) {
      for (let value in values) {
        this.deck.push(`${values[value]} of ${suits[suit]}`);
      }
    }
  }
  shuffle(){
    const { deck } = this;
    const shuffledArray = deck.sort((a, b) => 0.5 - Math.random());
  }
  deal_card(){
    const { deck } = this;
    const randomIndex = Math.floor(Math.random()*100%52);
    return deck[randomIndex]
  }
}

const deck = new Deck();
deck.shuffle();
console.log(deck.deal_card())

