describe('7.1 Deck of Cards', function(){

  let newDeck

  beforeEach(function(){
    newDeck = new Deck()
    newDeck.newDeck()
  })

  it('Should contain 52 cards in the new deck', function(){
    expect(newDeck.cards.length).toEqual(52)
  })

  it('Should contain 13 cards of each suit', function(){
    let suitCounter = { heart: 0, diamond: 0, spade: 0, club: 0 }
    newDeck.cards.forEach(card => {
      suitCounter[card.suit]++
    })
    expect(suitCounter.heart).toEqual(13)
    expect(suitCounter.diamond).toEqual(13)
    expect(suitCounter.spade).toEqual(13)
    expect(suitCounter.club).toEqual(13)
  })

  it('Should reset when the clear method is invoked', function(){
    newDeck.clear()
    expect(newDeck.cards.length).toEqual(0)
  })

  it('Should shuffle when the shuffle method is invoked', function(){
    newDeck.shuffle()
    expect(newDeck.cards[0].value).not.toEqual('A heart')
  })

  it('Should remove cards that are dealt from the deck', function(){
    newDeck.deal(2)
    expect(newDeck.cards.length).toEqual(50)
    newDeck.deal(5)
    expect(newDeck.cards.length).toEqual(45)
    newDeck.deal(10)
    expect(newDeck.cards.length).toEqual(35)
  })

})
