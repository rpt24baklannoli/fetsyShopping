/* eslint-disable max-len */
/* eslint-disable no-plusplus */

const wordBank = 'cat dollar vase lamp mask desk heating remote LED plant green glass pearl window shade curtain monitor shelf book alcohol lotion wiping board wood cloth sofa bed soft luxrious tea drink food panel weight painting duvet succulent fan indoor ball sport hydrate warming edison maker artisan blue flag leaf cover to';

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomFloat = (min, max, decimalPlaces) => Number((Math.random() * (max - min) + min).toFixed(decimalPlaces));

const itemName = () => {
  const words = wordBank.split(' ');
  let itemNameLength = randomInt(3, 10);
  let name = '';
  while (itemNameLength > 0) {
    name += `${words[randomInt(0, words.length - 1)]} `;
    itemNameLength--;
  }
  return name;
};

const price = () => randomFloat(0, 100, 2);

const randomBool = () => randomInt(1, 2) === 1;

module.exports = {
  wordBank, randomInt, randomFloat, itemName, price, randomBool,
};
