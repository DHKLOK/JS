class Card {

    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }

}
let cards = [
new Card("A", "Hearts"),
new Card("10", "Diamond"),
new Card("2", "Spade"),
new Card("7", "Clubs"),
new Card("J", "Hearts"),
new Card("Q", "Diamond"),
new Card("3", "Spade"),
new Card("K", "Clubs"),
]

cards.forEach(card => console.log(`${card.value} ${card.suit}`))



