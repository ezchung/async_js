"use strict";

const NUMBERS_API_URL = "http://numbersapi.com/";
const $cards = $("#cards");
const $drawCardBtn = $("#draw_card");


/** Takes inputted numbers, queries the NUMBERS API and appends the facts from
 * NUMBERS API into the DOM.
 */
async function getNumbersFacts(...numbers) {
  $factsSection.empty();
  let params = numbers.join(",");

  const facts = await axios({ url: NUMBERS_API_URL + params + '?json' });
  //   console.log(facts)
  for (let fact in facts.data) {
    // console.log(text)
    $factsSection.append($(`<li>${facts.data[fact]}</li>`));
  }
}

/** Takes inputted number, queries the NUMBERS API and appends 4 facts from
 * NUMBERS API into the DOM. */
async function getNumberFact(number) {
  $factsSection.empty();

  const fact1 = axios({ url: NUMBERS_API_URL + number + '?json' });
  const fact2 = axios({ url: NUMBERS_API_URL + number + '?json' });
  const fact3 = axios({ url: NUMBERS_API_URL + number + '?json' });
  const fact4 = axios({ url: NUMBERS_API_URL + number + '?json' });
  let resp = await Promise.allSettled([fact1, fact2, fact3, fact4]);

  for (let fact of resp) {
    $factsSection.append($(`<li>${fact.value.data.text}</li>`));
  }
}

