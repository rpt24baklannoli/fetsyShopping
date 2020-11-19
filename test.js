const dataSeedUtils = require('./database/utils.js');

// console.log(dataSeedUtils.randomInt(1, 10))

test('passes when number returned by randomInt is within given bounds', () => {
  expect(dataSeedUtils.randomInt(1, 10)).toBeWithin(1, 11);
  expect(dataSeedUtils.randomInt(0, 5)).toBeWithin(0, 6);
});

