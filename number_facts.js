"use strict";

const NUMBERS_API_URL = "http://numbersapi.com/";
const $factsSection = $("#facts_list");

/** Takes inputted numbers, queries the NUMBERS API and appends the facts from
 * NUMBERS API into the DOM.
 */
async function getNumbersFacts(...numbers) {
  let params = numbers.join(",");

  const facts = await axios({ url: NUMBERS_API_URL + params });

  for (let fact in facts.data) {
    $factsSection.append($(`<li>${facts.data[fact]}</li>`));
  }
}
