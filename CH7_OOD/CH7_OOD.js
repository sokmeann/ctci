/***** PROBLEM 1 - Deck of Cards */

  /*
  * Assume a standard 52-card set
  * Suits: Heart, Diamond, Spade, Club
  * Numbers: A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K
  */

  class Card {
    constructor(suit, number) {
      this.suit = suit
      this.number = number
      this.value = `${this.number} ${this.suit}`
    }
  }

  class Deck {
    constructor(){
      this.cards = []
    }
  }

  Deck.prototype.newDeck = function(){
    this.clear()
    const suits = ['heart', 'diamond', 'spade', 'club']
    const numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    suits.forEach(suit => {
      numbers.forEach(number => this.cards.push(new Card(suit, number)))
    })
    return this.cards
  }

  Deck. prototype.clear = function(){
    this.cards = []
  }

  Deck.prototype.shuffle = function(){
    this.cards.sort(() => Math.random() > 0.5 ? 1 : -1)
  }

  Deck.prototype.deal = function(n){ // where n is the number of cards to be dealt
    this.cards = this.cards.slice(0, -n)
  }

/***** PROBLEM 2 - Class Center */
/***** PROBLEM 3 - Jukebox */
/***** PROBLEM 4 - Parking Lot */
/***** PROBLEM 5 - Onine Book Reader */
/***** PROBLEM 6 - Jigsaw */
/***** PROBLEM 7 - Chat Server */
/***** PROBLEM 8 - Othello */
/***** PROBLEM 9 - Circular Array */
