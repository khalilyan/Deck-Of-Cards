class Deck {
  constructor() {
    this.deck = [];
    this.dealedCards = [];

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
    deck.sort((a, b) => 0.5 - Math.random());
  }
  deal_card(){
    const { deck,dealedCards } = this;
    let card = deck.pop();
    dealedCards.push(card)
    return card
  }
  reset(){
    const { deck,dealedCards } = this;
        deck.push(...dealedCards);
        this.dealedCards = []
        this.shuffle();
  }
}

const deck = new Deck();


const shuffle = document.getElementById('shuffle');
const deal_card = document.getElementById('deal_card');
const display = document.getElementById('display');

shuffle.addEventListener('click',()=>{
    if(deck.deck.length === 0){
        deck.reset();
    }
    deck.shuffle();
    display.innerHTML = 'Shuffled!';
    deal_card.style.opacity = 1
})

deal_card.addEventListener('click',()=>{
    if(deck.deck.length === 0){
        deal_card.style.opacity = .4;
        display.innerHTML = 'Please Shuffle Cards';
        return null 
    }
    const card = deck.deal_card(); 
    display.innerHTML = card
    console.log(deck.deck.length,deck.dealedCards.length)
    
})