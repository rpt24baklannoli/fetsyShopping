const axios = require ('axios');
jest.mock('axios');

//## UNIT TESTING API CALLS (MOCK)

describe('API testing', () => {

  beforeEach(() => {
    jest.resetAllMocks();
  });

  // Test function that gets item data (mimics what front-end does)
  async function testGetItemData() {
    const response = await axios.get('/shopping/items/2');
    return response.rows[0];
  }

  test('verifies item data returned from API call', async () => {
    axios.get.mockResolvedValue({
      rows: [
        {
          item_id: 2,
          item_name: 'irure in ut consequat dolor aliquip do laboris commodo ',
          best_seller: false,
          price: '63.49',
          price_reduction: '25.32',
          in_stock: false,
          us_free_shipping: false,
          carts_item_is_in: 13
        }
      ]
    });

    const data = await testGetItemData();

    expect(data.item_name).toBeString();
    expect(data.price).toBeString();
    expect(data.best_seller).toBeBoolean();
    expect(data.in_stock).toBeBoolean();
    expect(data.us_free_shipping).toBeBoolean();
    expect(Number(data.price_reduction)).toBeLessThan(Number(data.price));

  });

})