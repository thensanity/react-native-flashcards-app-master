import getDeckInfo from '../utils/helpers'

export const ADD_DECK = 'ADD_DECK'
export const GET_DECKS = 'GET_DECKS'
export const RECIEVE_DECKS = 'RECIEVE_DECKS'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'

export function addDeck (deck) {
	return {
		type: ADD_DECK,
		deck
	}
}

export function recieveDecks (decks) {
	return {
		type: RECIEVE_DECKS,
		decks
	}
}

export function addCard (card) {
	return {
		type: ADD_CARD_TO_DECK,
		card
	}
}
