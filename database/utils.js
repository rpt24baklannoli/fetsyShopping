/* eslint-disable max-len */
/* eslint-disable no-plusplus */
// This file contain functions that create sample data
// There should be a function that creates a row of sample data
// A query should be run that adds the sample data to the database once it is created

const wordBank = 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor icididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur';

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomFloat = (min, max, decimalPlaces) => (Math.random() * (max - min) + min).toFixed(decimalPlaces);

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
