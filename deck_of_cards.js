'use strict';
const CARDS_API_BASE_URL = 'https://deckofcardsapi.com/api/deck/';
const $cards = $("#cards");
const $drawCardBtn = $("#draw_card");
let deck;
setup();

async function get_single_card() {

  const resp = await axios({ url: `${CARDS_API_BASE_URL}${deck}/draw/?count=1` });
  const card = resp.data.cards[0];


  $cards.append($(`<div class = "card"><img src = ${card.image}></img></div>`));

  return resp.data;
}


async function get_two_cards() {

  const c1_p = await get_single_card();
  const c2_p = await get_single_card();

  const cards = [c1_p, c2_p];
  for (let card in cards) {
    console.log('value: ', c1_p.cards[0].value);
    console.log('suit: ', c2_p.cards[0].suit);
  }

}

async function get_new_deck() {

  const resp = await axios({ url: CARDS_API_BASE_URL + 'new' });

  return resp.data['deck_id'];
}


async function setup() {
  deck = await get_new_deck();
}





$drawCardBtn.on('click', get_single_card);

